
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./Main.css";

const Main= () => {
    return(
      
       <Container className="main">
         <div>
        <Row className="justify-content-center align-items-center" > 
      
            <Col  md={2}>
        
            <img src="/img/monica.jpg" className="yo rounded center mx-auto" alt="Monica" />
            </Col>
            <Col  md={10} > 
               <p>Soy <span>Técnico Superior en Programación </span> Trabajo en una consultora de Sistemas, donde formo parte de la Mesa de Soporte de Nivel 1 y 2 
               principalmente en temas de Calidad de Gestión y Oportunidades de Mejora.
                </p>
            
                <p>La pandemia y el homeworking me han dado el tiempo y la oportunidad de generar algunos cambios,
                    entre ellos retomar mi afición por la programación. Me entusiasma acercarme a nuevas
                     herramientas y lenguajes, ampliando mi perfil para una visión más global pero a la vez
                     detallada de cualquier proyecto en el que pueda trabajar.  
                </p>
             </Col>   
          </Row >
          </div>
            
        </Container>
      
           
 

    );
};

export default Main;