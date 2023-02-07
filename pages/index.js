import React from 'react';
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import {StyledTimeline} from "../src/components/Timeline";

function HomePage() {
 
  const [valorDoFiltro, setValorDoFiltro] = React.useState("")


  return (
    <>
   
      <div style={{
      display: "flex",
      flexDirection: "column",
      flex: 1,
      }}>
        {/* // <div style={styleHomePage}> */}
          <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro= {setValorDoFiltro}/>
          <Header />
          <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
            Conteúdo
          </Timeline>
        </div>
    </>
  )
}

export default HomePage

// function Menu() {
//   return (
//     <div>
//       Menu
//     </div>
//   )
// }
const StyleHeader = styled.div`
  background-color: ${({theme})=> theme.backgroundLevel1};

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info{
    display:flex;
    align-itens: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px
  }
`;
const StyledBanner = styled.div`
  background-color: blue;
  background-image: url(${({ bg }) =>bg });
  height: 230px;
`;
// pode ser substituido p/ parametros acima-> "background-imag: url(${config.bg});

function Header() {
  return (
    <StyleHeader>
      <StyledBanner bg={config.bg}/>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyleHeader>

  )
}
  function Timeline({searchValue, ...props}) {
  const playlistsName = Object.keys(props.playlists)
  return (
    <StyledTimeline>
      {playlistsName.map((playlistsName) => {
        const videos = props.playlists[playlistsName]
        return (
          <section key={playlistsName}>
            <h2>{playlistsName}</h2>
            <div>
              {videos.filter((videos)=>{
                const titleNormalized = videos.title.toLowerCase();
                const searchvalueNormalized = searchValue.toLowerCase();
                return titleNormalized.includes(searchvalueNormalized)
              }).map((videos) => {
                return (
                  <a key={videos.url} href={videos.url}>
                    <img src={videos.thumb} />
                    <span>
                      {videos.title}
                    </span>
                  </a>
                )
              })};
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}