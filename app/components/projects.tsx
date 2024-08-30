import Link from 'next/link'
import { getProjects } from 'app/projects/utils';

export function Projects() {
    let projects = getProjects();
    return (
        <div>
          {projects
            .sort((a, b) => {
                if (new Date(a.metadata.completedOn) > new Date(b.metadata.completedOn)) {
                  return -1;
                }
                return 1
                
              })
            .map((post) => (
              <Link
                key={post.slug}
                className="flex flex-col space-y-1 mb-4"
                href={`/projects/${post.slug}`}
              >
                <div className="w-full flex flex-col">
                  <h2 className="text-neutral-900 font-semibold dark:text-neutral-100 tracking-tight">
                    {post.metadata.title}
                  </h2>
                  <p>{post.metadata.summary}</p>
                </div>
              </Link>
            ))}
        </div>
      )
}

interface IRecentProjectProps {
  numProjects: number
}

export function RecentProjects(props: IRecentProjectProps) {
  let projects = getProjects();
    return (
        <div>
          {projects
            .sort((a, b) => {
                if (new Date(a.metadata.completedOn) > new Date(b.metadata.completedOn)) {
                  return -1;
                }
                return 1
                
              })
            .slice(0, props.numProjects)
            .map((post) => (
              <Link
                key={post.slug}
                className="flex flex-col space-y-1 mb-4"
                href={`/projects/${post.slug}`}
              >
                <div className="w-full flex flex-col">
                  <h2 className="text-neutral-900 font-semibold dark:text-neutral-100 tracking-tight">
                    {post.metadata.title}
                  </h2>
                  <p>{post.metadata.summary}</p>
                </div>
              </Link>
            ))}
        </div>
      )
}