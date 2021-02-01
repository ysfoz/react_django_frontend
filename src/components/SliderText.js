import React from "react";
import ScrollText from "react-scroll-text";
import foto from '../assets/banner.jpeg'

export const SliderText = () => {
  return (
    <div
      style={{
        backgroundColor:"rgba(0,0,0,0.7)",
        backgroundImage:`url(${foto})`,
        color: "#263238",
        fontSize: 20,
        fontWeight: "bold",
        width:'98%',
        borderRadius:10

      }}
    >
      <h2 style={{ padding:10}}>Wie funktioniert es</h2>
      <ScrollText speed={100} style={{ padding:10,width:'98%'}}>
        Erstens wurde das Backend mit Django Framework gemacht. In diesem Phase
        wurde zwei Apps, User für Benutzer and Post für Articles erstellt. Es wurde ein model
        die Profile der benutzer in User App erstellt. In dem Anderen App
        wurde vier models für je Aritcle; Comment, Like and View Count erstellt.
        Naturlich es gibt verschidene Serializer, View and url files für alle
        Process. Wenn Jemand diese sehen möchte, kann er sie in meinem Github
        Page finden. Dann Frontend, alle Pages wurden mit React gemacht.
        Material Ui Components wurden benuzt. Manche Styling wurde angehangt, um
        diese Webseite total Respopnsive zu sein. Alle Pagination Codes gehört
        mir. Ich habe ein besonderes Algoritm für Pagination erzest. Wenn Sie
        ohne registeration weitergehen möchte, sollte Sie wissen , dass man
        keine Article anhangen kann. Aber Sie können alle Articles sehen und
        lesen. Sobald man registiriert hat, kann er neu Article erstellen and
        teilen, außerdem können die Andere Article mit Like Button gemocht
        werden, oder der Comments können erstellt werden.
      </ScrollText>
    </div>
  );
};
