import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import {Seo} from '@shopify/hydrogen';
import styles from './styles/app.css';
import favicon from '../public/favicon.svg';
import {Layout} from './components/Layout';
import { useState } from 'react';
import Navbar from "~/components/navbar"
import Footer from './components/footer';



export const links = () => {
  console.log('styles: ', styles);
  return [
    {rel: 'stylesheet', href: styles},
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {rel: 'icon', type: 'image/svg+xml', href: favicon},
  ];
};

const customStyles = {
  modal: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
  },
  modalBackground: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(200, 200, 200)',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
      width: '500px',
      height: '500px',
      borderRadius: '12px',
      backgroundColor: 'white',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      display: 'flex',
      flexDirection: 'column',
      padding: '25px'
  }
}

export async function loader({context}) {

  const layout = await context.storefront.query(LAYOUT_QUERY);
  return {layout};
}

export default function App() {
  const data = useLoaderData();
  const [landingPage, setLandingPage] = useState(true);
  const [miniBrowser, setMiniBrowser] = useState(false);

  function openLandingPage() {
    setLandingPage(true);
  }

  function closeLandingPage() {
    setLandingPage(false);
  }

  function openMiniBrowser() {
    setMiniBrowser(true);
  }

  function closeMiniBrowser() {
    setMiniBrowser(false);
  }

  function Window () {
    

    return (
      <div >
        <div >
          <header>
            <Navbar/>
          </header>
          <body>
            <Layout>
                <Outlet />
              </Layout>
          </body>
          <footer>
            <Footer/>
          </footer>
        </div>
      </div>
    )
  }

  const {name} = data.layout.shop;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Seo />
        <Meta />
        <Links >
          <link href="path/to/your/generated.css" rel="stylesheet"></link>
        </Links>
      </head>
      <body>
      {landingPage && (
         <div>
              <video autoPlay loop muted>
                  <source src='https://i.imgur.com/2jLwS41.mp4' type="video/mp4"/>
              </video>
              <div>
                  <nav>
                    <button onClick={closeLandingPage}>
                        Press to Enter
                    </button>
                  </nav>
              </div>
          </div>
      )}
      {landingPage == false && (
          <div className="Home">
                  <video className="homeVideo" autoPlay loop muted>
                      <source src='https://i.imgur.com/2jLwS41.mp4' type="video/mp4"/>
                  </video>
              <div className="body">
                  <body>
                      
                          <img src="https://i.imgur.com/i9KgFOX.gif"/>
                          <button className="buttonShop" onClick={openMiniBrowser}>
                              Shop
                          </button>
                      
                      
                      <img src="https://i.imgur.com/xDgYL4R.gif"/>
                          <button className="buttonCart">
                              Cart
                          </button>
                      
                      <img src="https://i.imgur.com/Mm0P4CS.gif"/>
                          <button className="buttonAbout">
                              About
                          </button>
                  </body>
              </div>
              <footer>
                  <div className="footer">
                      <button className="buttonFooter">
                          Start
                      </button>
                  </div>
              </footer>
          </div>
      )}
      {miniBrowser && 
         <ReactModal 
            initWidth={800} 
            initHeight={400} 
            onFocus={() => console.log("Modal is clicked")}
            className={"my-modal-custom-class"}
            onRequestClose={this.closeModal} 
            isOpen={this.state.modalIsOpen}>
            <h3>My Modal</h3>
            <div className="body">
                <p>This is the modal&apos;s body.</p>
            </div>
            <button onClick={this.closeModal}>
                Close modal
            </button>
        </ReactModal>
      }
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const LAYOUT_QUERY = `#graphql
  query layout {
    shop {
      name
      description
    }
  }
`;
