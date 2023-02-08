import React from "react";
import { StyledRegisterVideo } from "./styles";

//custom hook
function useForm(propsDoForm){
  const [values, setVelues] = React.useState(propsDoForm.initialValues);

  return{
    values,
    handleChange:(ev)=>{
      console.log(ev.target);
        const value = ev.target.value;
        const name = ev.target.name
        console.log(value);
        setVelues({
          ...values,
          [name]:value,
        })
      },
      clearFrom(){
        setVelues({})
    }
    }
  };


export default function RegisterVideo(){ 
  const formCadastro= useForm({
    initialValues:{ titulo: "Frost punk", url: "https://youtube.."}
  });
  const [formVisivel, setFormVisivel] = React.useState(true);

  /* O QUE PRECISA PARA O FORMULARIO FUNCIONAR?
  - pegar os dados que precisa vir do state
    - titulo
    -url video
  -precisa ter um onSubmit do nosso form
  -Limpar o formulário após o Submit */

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={()=> setFormVisivel(true)}>
        +
      </button>
      {formVisivel
      ?(
        <form onSubmit={(ev)=>{
          ev.preventDefault();
          console.log(formCadastro.values);
          setFormVisivel(false);
          formCadastro.clearFrom();
        }}>
        <div>
          <button className="close-modal" onClick={()=> setFormVisivel(false)}>
            x
          </button>
          <input 
            placeholder="Titulo de vídeo" 
            name="titulo"
            value={formCadastro.values.titulo} 
            onChange={formCadastro.handleChange}
          />
          <input
            placeholder="URL" 
            name="url"
            value={formCadastro.values.url}
            onChange={formCadastro.handleChange}
          />
          <button type="submit">
            Cadastrar
          </button>
       </div>
      </form>
      )
    :false}
    </StyledRegisterVideo>
  )

}