import React, { useRef } from 'react';
import { RxCross2 } from 'react-icons/rx';

import { useSelector, useDispatch } from 'react-redux';
import { setOpen } from '../redux/appSlice';
import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import { db } from '../firebase';

const SendMail = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.appSlice.open);

  const toInputRef = useRef();
  const subInputRef = useRef();
  const msgInputRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    // const formData = {
    //     to: toInputRef.current.value,
    //     subject: subInputRef.current.value,
    //     message: msgInputRef.current.value
    // }
    try{
        const docRef = await addDoc(collection(db, "emails"), {
            to: toInputRef.current.value,
            subject: subInputRef.current.value,
            message: msgInputRef.current.value,
            createdAt: serverTimestamp()
        });
        console.log("Document written with ID:", docRef.id);
    } catch(e){
        console.log("Error adding document: ", e);
    }
    

    toInputRef.current.value = null;
    subInputRef.current.value = null;
    msgInputRef.current.value = null;
    dispatch(setOpen(false))
  }

  return (
    <div
      className={` ${
        open ? 'block' : 'hidden'
      } bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}
    >
      <div className="flex px-3 py-2 bg-[#F2F6FC] justify-between rounded-t-md">
        <h1>New Message</h1>
        <div
          onClick={() => dispatch(setOpen(false))}
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <RxCross2 size={'10px'} />
        </div>
      </div>
      <form onSubmit={submitHandler} className="flex flex-col p-3 gap-2">
        <input ref={toInputRef} name="to" type="text" placeholder="To" className="outline-none py-1" />
        <input
            ref={subInputRef}
            name="subject"
          type="text"
          placeholder="Subject"
          className="outline-none py-1"
        />
        <textarea
            ref={msgInputRef}
          name="message"
          cols={'30'}
          rows={'10'}
          className="outline-none py-1"
        ></textarea>
        <button
          type="submit"
          className="bg-[#0a55ce] rounded-full w-fit px-4 text-white font-medium"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMail;
