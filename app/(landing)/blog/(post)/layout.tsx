const BlogPostLayout = async ({ children }: React.PropsWithChildren) => {
  return (
    <div className="prose-invert container text-muted-foreground prose-a:no-underline selection:bg-rose-500">
      {children}
    </div>
  )
}

export default BlogPostLayout
