import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Dev',
    Svg: require('@site/static/img/dev.svg').default,
    description: (
      <>
        Exemplos de códigos, conceitos, boas práticas, frameworks...
      </>
    ),
  },
  {
    title: 'Sec',
    Svg: require('@site/static/img/sec.svg').default,
    description: (
      <>
        Explicações de falhas, instrução de execução de tools, exemplos de 
        exploits, oneliners, Pentest...
      </>
    ),
  },
  {
    title: 'Ops',
    Svg: require('@site/static/img/ops.svg').default,
    description: (
      <>
        Linux, virtualização, IaC (Infrastructure as Code), Kubernetes, 
        Docker, etc.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
