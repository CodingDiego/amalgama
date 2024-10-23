import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
//Lo que demore tratando de ver las missing tags pensando que habia pegado mal el codigo
/*
Cosas que yo habria cambiado, de principal para los links hubiera usado los Links que
venian de RouterDOM, solo por ser mas optimos.
En todos los maps faltan lo que serian las keys, en packages instale react-router-dom por lo mismo.
Despues bueno, como mencionado en mi sufrimiento, todas las tags que estan abiertas sin cerrar o metidas
donde no tienen que estar (adentro de un map de repente abriendo una <li> y no cerrandola, o divs fuera de rango etc)
La falta del alt en el tag de img
una ul adentro de otra ul (malo evidentemente)

*/

const Contactos = ({ contacts, cities, states }) => {
  const truncate = (str, maxLength) => {
    return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
  };

  const findById = (array, id) => {
    const item = array.find(element => element.id === id);
    return item ? item.name : "Unknown";
  };

  const contactsToDisplay = contacts.map(contact => ({
    id: contact.id,
    avatar_url: contact.avatar_url,
    full_name: `${contact.first_name} ${contact.last_name}`,
    company: contact.company,
    details: truncate(contact.details, 100),
    email: contact.email,
    phone_number: `(${contact.phone.area_code}) ${contact.phone.number}`,
    addresses: contact.addresses.map(address => ({
      line_1: address.line_1,
      line_2: address.line_2,
      zip_code: address.zip_code,
      city: findById(cities, address.city_id),
      state: findById(states, address.state_id),
    }))
  }));

  return (
    <>
      <h1>Contacts 👥</h1>
      <nav>
        <ul>
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/contacts">My Contacts</Link></li>
        </ul>
      </nav>

      {contactsToDisplay.map((contact) => (
        <div key={contact.id}>
          <div>
            <img src={contact.avatar_url} alt={contact.full_name} />
            <h3>{contact.full_name}</h3>
            <h4>{contact.company}</h4>
          </div>

          <p>{contact.details}</p>kle

          <ul>
            <li>Email: {contact.email}</li>
            <li>Phone: {contact.phone_number}</li>
          </ul>

          {contact.addresses.length > 1 ? <h4>Addresses:</h4> : <h4>Address:</h4>}
          {contact.addresses.map((address, index) => (
            <ul key={index}>
              <li>{address.line_1}</li>
              <li>{address.line_2}</li>
              <li>{address.zip_code}</li>
              <li>{address.city}</li>
              <li>{address.state}</li>
            </ul>
          ))}
        </div>
      ))}
    </>
  );
};

export default Contactos;
