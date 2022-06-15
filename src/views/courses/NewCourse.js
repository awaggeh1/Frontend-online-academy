import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import API from 'api-config';
import { NavLink, useHistory } from 'react-router-dom';

import { FormGroup, FormControl, Button } from 'react-bootstrap';

const NewCourse = () => {

    const [loaded, setLoaded] = useState(0);
    const [user, setUser] = useState([]);
    const [categories, setCategories] = useState([]);
    const [instructors, setInstructors] = useState([]);
    const [isShown, setIsShown] = useState(false);

    // Estat dels inputs
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Level, setLevel] = useState("");
    const [category, setCategory] = useState("");
    const [instructor, setInstructor] = useState("");
    const [categoryID, setCategoryID] = useState(0);
    const [instructorID, setInstructorID] = useState(0);
    const [url, setUrl] = useState("");
    const [Duration, setDuration] = useState("");
    const [Release, setRelease] = useState("");
    const history = useHistory();

    // Recupera les dades d'inici de sessió del usuari 
    const GetUserData = () => {
        const u = sessionStorage.getItem('user')
        const data = JSON.parse(u)
        setUser(data)
    }

    const GetCategories = async () => {
        const data = await fetch(`${API.ADDR}/categories`) // Obte les dades del curs especificat
        const catData = await data.json(); // els transforma en json
        setCategories(catData)
        setLoaded(true)
    }

     // Retorna dades del professor
    const GetInstructors = async () => {
        const data = await fetch(`${API.ADDR}/instructors`)
        const instructorData = await data.json();
        setInstructors(instructorData)
    }
    
    const handleChangeCategory = (e) => {
        setCategory(e.target.value)
        // Suma 1 per que cuadi amb les id de la base de dades
        setCategoryID(e.target.selectedIndex+1)
    };

    const handleChangeInstructor = (e) => {
        setInstructor(e.target.value)
        // Suma 1 per que cuadi amb les id de la base de dades
        setInstructorID(e.target.selectedIndex+1)
    };

    // Fa un post d'un nou review a la base de dades
    async function PostCourse(){
        fetch(`${API.ADDR}/courses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            title: Title,
            description: Description,
            level: Level,
            video_uri: url,
            duration: Duration,
            release: Release,
            categoryIdcategory: categoryID, // he d'agafar la id
            instructorIdinstructor: instructorID // he d'agafar la id
        })
        })
    }

     
    

    useEffect(() => {
        GetCategories()
        GetUserData()
        GetInstructors()
    }, [])
     
    const onSubmit = () => {
        PostCourse()
        // Resetea el campo
        setTitle("")
        setDescription("")
        setLevel("")
        setCategory("")
        setInstructor("")
        setUrl("")
        setDuration("")
        setRelease("")
        // setIsShown(true) // Mostra l'alerta
    };
   
    
    // No entra mentres el hook no estigui carregat
    if(!loaded){
        return <div>Loading ...</div>;
    }

    // Si l'usuari es admin podrá afegir cursos
    if (user.nickname === "admin"){
        return (
            <div>
                <Form>
                <Form.Group className="mb-3" controlId="formtitle">
                        {/* boton enviar */}      
                     <Button 
                        variant="primary" 
                        type="submit"
                        onClick={() => {history.push('/dashboards/elearning')}}
                    >
                        Atras
                    </Button>
                    </Form.Group>
                     
                    {/* titulo */}
                    <Form.Group className="mb-3" controlId="formtitle">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control 
                            type="text"
                            value={Title}
                            onChange={e => setTitle(e.target.value)} 
                        />
                    </Form.Group>
                    
                    {/* descripcion */}
                    <Form.Group className="mb-3">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            value={Description}
                            onChange={e => setDescription(e.target.value)} 
                        />
                    </Form.Group>
                    
                    {/* nivel */}
                    <Form.Group className="mb-3">
                        <Form.Label>Nivel</Form.Label>
                        <Form.Select
                            value={Level}
                            onChange={e => setLevel(e.target.value)}
                        >
                            <option>Principiante</option>
                            <option>Intermedio</option>
                            <option>Avanzado</option>
                        </Form.Select>
                    </Form.Group>
    
                    {/* categoria */}
                    <Form.Group className="mb-3" >
                        <Form.Label>Categoria</Form.Label>
                        <Form.Select
                            value={category}
                            // onChange={e => setCategory(e.target.value)}
                            onChange={e => handleChangeCategory(e)}
                        >
                            {categories.map(c =>                               
                                (
                                    <option
                                        key={c.key}
                                        value={c.name}                                       
                                        id={c.idcategory}
                                    >     
                                    {c.name}
                                    </option>
                                )                          
                            )
                            }
                        </Form.Select>
                    </Form.Group>
                    
                    {/* instructor */}
                    <Form.Group className="mb-3">
                        <Form.Label>Profesor</Form.Label>
                        <Form.Select
                            value={instructor}
                            onChange={e => handleChangeInstructor(e)}
                        >
                            {instructors.map(i => (
                                <option
                                    key={i.key}
                                    value={i.name}
                                >
                                    {i.first_name} {i.last_name}
                                </option>
                                )
                            )}
                        </Form.Select>
                    </Form.Group>
                    
                    {/* url */}
                    <Form.Group className="mb-3">
                        <Form.Label>Video URL Youtube</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="url" 
                            value={url}
                            onChange={e => setUrl(e.target.value)}
                        />
                         <Form.Text className="text-muted">
                            Adjunta el url del video subido en youtube
                        </Form.Text>
                    </Form.Group>
                    
                    {/* duracion */}
                    <Form.Group className="mb-3" >
                        <Form.Label>Duración</Form.Label>
                        <Form.Control 
                            type="time" 
                            placeholder="duración"
                            value={Duration}
                            onChange={e => setDuration(e.target.value)}
                        />
                    </Form.Group>
                    
                    {/* fecha de publicacion */}
                    <Form.Group className="mb-3" >
                        <Form.Label>Fecha de publicación</Form.Label>
                        <Form.Control 
                            type="date"
                            value={Release}
                            onChange={e => setRelease(e.target.value)}
                        />
                    </Form.Group>
                    
                    {/* boton enviar */}      
                    <Button 
                        variant="outline-primary" 
                        type="submit"
                        onClick={() => onSubmit()}
                    >
                        Enviar
                    </Button>
                </Form>
            </div>
        );
    }
    
    return(
        <div>No tens permis per afegir un nou curs</div>
    );
};

export default NewCourse;