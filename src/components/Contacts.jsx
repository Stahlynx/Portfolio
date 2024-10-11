import { CONTACT } from '../constants'

const Contacts = () => {
  return (
    <div className='my-4'>
      <h2 className='text-center text-3xl mb-8'>Get in
        <span className='text-purple-800'> Touch</span>
      </h2>
      <div className='text-center tracking-tighter'>
        <p className='my-2'>{CONTACT.phoneNo}</p>
        <a className='border-b hover:border-purple-700 hover:text-purple-700' href="https://mail.google.com/mail/?view=cm&fs=1&to=theokurniady12@gmail.com&su=SUBJECT&body=BODY">{CONTACT.email}</a>
      </div>
    </div>
  );
};

export default Contacts
