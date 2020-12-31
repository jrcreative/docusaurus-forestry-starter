import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Colloborate with your friendly neighborhood devs</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Vancouver, WA is a great place to be a developer. Collaborate, commiserate and celebrate with a group of folks that "get you."
      </>
    ),
  },
  {
    title: <>Learn from those a step ahead</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Soak it in. There's always more to learn in this field, and it's impossible to keep up. Join a group of like-minded folks that can help navigate what's coming, and what's going.
      </>
    ),
  },
  {
    title: <>Teach what you know</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        The best way to learn something is to teach it to someone else. Share what you know to benefit others, and lock in your own skils.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
