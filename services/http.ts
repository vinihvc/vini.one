import { env } from '@/lib/env'
import type { ResponseType } from '@/types/response'

export class HttpError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'HttpError'
    this.status = status
  }
}

export interface RequestOptions extends RequestInit {
  timeout?: number
}

/**
 * Makes a typed HTTP request with error handling
 *
 * @param url - The URL to fetch
 * @param options - Request options including standard fetch options and custom ones
 * @returns A promise that resolves to the response data with the specified type
 */
const fetchWithTypes = async <T>(
  url: string,
  options: RequestOptions = {},
): Promise<ResponseType<T>> => {
  const { timeout = 10000, ...fetchOptions } = options

  const headers = {
    'Content-Type': 'application/json',
    ...fetchOptions.headers,
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(`${env.NEXT_PUBLIC_API_URL}${url}`, {
      ...fetchOptions,
      headers,
      signal: controller.signal,
    })

    // Clear timeout
    clearTimeout(timeoutId)

    // Handle non-2xx responses
    if (!response.ok) {
      const errorText = await response.text()
      throw new HttpError(
        `Request failed with status ${response.status}: ${errorText}`,
        response.status,
      )
    }

    // Parse JSON response
    const data = await response.json()
    return data as ResponseType<T>
  } catch (error) {
    // Clear timeout
    clearTimeout(timeoutId)

    // Handle different error types
    if (error instanceof HttpError) {
      throw error
    }

    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new HttpError(`Request timed out after ${timeout}ms`, 408)
    }

    throw new HttpError(
      `Network error: ${error instanceof Error ? error.message : String(error)}`,
      0,
    )
  }
}

/**
 * HTTP client with methods for different HTTP verbs
 */
export const http = {
  /**
   * Make a GET request
   */
  get<T>(url: string, options?: RequestOptions): Promise<ResponseType<T>> {
    return fetchWithTypes<T>(url, { ...options, method: 'GET' })
  },

  /**
   * Make a POST request
   */
  post<T>(
    url: string,
    data: unknown,
    options?: RequestOptions,
  ): Promise<ResponseType<T>> {
    return fetchWithTypes<T>(url, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    })
  },

  /**
   * Make a PUT request
   */
  put<T>(
    url: string,
    data: unknown,
    options?: RequestOptions,
  ): Promise<ResponseType<T>> {
    return fetchWithTypes<T>(url, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    })
  },

  /**
   * Make a PATCH request
   */
  patch<T>(
    url: string,
    data?: unknown,
    options?: RequestOptions,
  ): Promise<ResponseType<T>> {
    return fetchWithTypes<T>(url, {
      ...options,
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    })
  },

  /**
   * Make a DELETE request
   */
  delete<T>(url: string, options?: RequestOptions): Promise<ResponseType<T>> {
    return fetchWithTypes<T>(url, { ...options, method: 'DELETE' })
  },
}
