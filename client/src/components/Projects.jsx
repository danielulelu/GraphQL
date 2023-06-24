import Spinner from './Spinner';
import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../queries/ProjectQueries';
import ProjectCard from './ProjectCard';


export default function Projects() {
    const { loading, error, data } = useQuery(GET_PROJECTS);

    if (loading) return <Spinner />;
    if (error) {
        console.error(error);
        return <p>Something went wrong: {error.message}</p>;
      }
      

    return (
      <>
        {data.projects.length > 0 ? (
            <div className="row">
                {data.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        ): (
              <p>No Project</p>
            )}
      </>
    )
}
