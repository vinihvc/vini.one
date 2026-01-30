import type { BookType } from "@/content/books";
import type { ProjectType } from "@/content/projects";
import type { CompanyType } from "@/content/static/companies";
import type { TravelType } from "@/content/travel";
import type { TripItem } from "@/types/source";
import { http } from "./http";

export const getTrips = async () => {
	const { data } = await http.get<TripItem[]>("/trips", {
		cache: "force-cache",
	});

	return data;
};

export const getTripBySlug = async (slug: string) => {
	const { data } = await http.get<TripItem>(`/trips/${slug}`, {
		cache: "force-cache",
	});

	return data;
};

export const getProjects = async () => {
	const { data } = await http.get<ProjectType[]>("/projects", {
		cache: "force-cache",
	});

	return data;
};

export const getCompanies = async () => {
	const { data } = await http.get<CompanyType[]>("/companies", {
		cache: "force-cache",
	});

	return data;
};

export const getBooks = async () => {
	const { data } = await http.get<BookType[]>("/bookshelf", {
		cache: "force-cache",
	});

	return data;
};

export const getUses = async () => {
	const { data } = await http.get<unknown[]>("/uses", {
		cache: "force-cache",
	});

	return data;
};

export const getTravel = async () => {
	const { data } = await http.get<TravelType[]>("/travels", {
		cache: "force-cache",
	});

	return data;
};

export const getPosts = async () => {
	const { data } = await http.get<unknown[]>("/posts", {
		cache: "force-cache",
	});

	return data;
};
