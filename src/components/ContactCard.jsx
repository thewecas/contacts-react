// import img from "../img/user.png";

export default function ContactCard(props) {
  const { id, name, phone, email } = props.contact;

  const sendDeleteId = () => {
    props.setDeleteId(id);
  };

  return (
    <div className="contact">
      {/* <img src={img} alt="avatar" /> */}
      <h3>{name}</h3>
      <p>{phone}</p>
      <p>{email}</p>
      <div className="btns">
        <button>edit</button>
        <button onClick={sendDeleteId}>delete</button>
      </div>
    </div>
  );
}
