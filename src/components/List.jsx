import style from "./CardList.module.css";

function List({ jobs }) {
  return (
    <ul className={style["card-list"]}>
      {jobs.map((job) => (
        <li className={style.card} key={job.id}>
          <a
            href={job.source_links[0].url}
            target="_blank"
            className={style["card-title"]}
          > 
            {job.headline}
          </a>
          <p className={style["card-brief"]}>{job.brief}</p>
          <div className={style["card-info"]}>
            <p>{job.workplace_addresses[0].municipality}</p>
            <p>{job.occupation_field.label}</p>
          </div>
          <p className={style.employer}>{job.employer.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default List;
