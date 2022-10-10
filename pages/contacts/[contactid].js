import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import contacts from "../api/contacts";
import React from "react";

export default function Contact() {

    const router = useRouter();
    const contact = contacts.find(contact => contact.id === router.query.contactid);
    const [first, last] = contact?.name.split(" ");

    return (
        <>
            <h1>Hello { last.toUpper() }</h1>
        </>
    )
}