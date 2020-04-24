// @flow strict
import React from 'react';
import { useSiteMetadata } from '../../hooks';
import styles from './Projects.module.scss';

const Projects = () => {
  const { projects } = useSiteMetadata();
  return (
    <div className={styles['projects']}>
      <div className={styles['projects__list']}>
        {projects.map((project) => (
          <div className={styles['projects__list-item']} key={project.name}>
            <div className={styles['projects__list-item-meta']}>
              <span className={styles['projects__list-item-meta-tag']}>
                {project.tag}
              </span>
            </div>
            <h2 className={styles['projects__list-item-title']}>
              <a className={styles['projects__list-item-title-link']} href={project.web} rel="noopener" target="_blank">
                  {project.name}
              </a>
            </h2>
            <p className={styles['projects__list-item-description']}>{project.description}</p>
            <a className={styles['projects__list-item-github']} href={`https://github.com/${project.github}`} rel="noopener" target="_blank">
              <img alt="GitHub stars" src={`https://img.shields.io/github/stars/${project.github}?style=social`} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
