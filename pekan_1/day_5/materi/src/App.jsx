import { useState } from "react";
import Counter from "./components/counter";
import UserProfile from "./components/UserProfile";
import ContactForm from "./components/ContactForm";

export default function App(){
 
  return (
    <>
     <Counter/>
     <UserProfile/>
     <ContactForm></ContactForm>
    </>
  )
}