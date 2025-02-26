const BlogPostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="prose prose-invert container text-muted-foreground">
      {children}
    </div>
  )
}

export default BlogPostLayout
