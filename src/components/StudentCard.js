
function StudentCard({name, week, info}) {
  return (
    <div className="StudentCard">
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Cohort:</b> {info.city} - {info.course}
      </p>
      <p>
        <b>Current week: {week} </b>
      </p>
      <br />
    </div>
  );
}

export default StudentCard;
