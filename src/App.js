import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Pets,
  NavBarHeader2,
  MarketingFooterBrand,
  AddPet,
  ReviewCard,
} from './ui-components';
import PetDetails from './pages/PetDetails';
import './App.css';
import { useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App({user, signOut}) {
  console.log(user);
  const [showForm, setShowForm] = useState(false);
  const [pet, setPet] = useState(null);
  const [updatePet, setUpdatePet] = useState(null);
  const [showPetDetails, setShowPetDetails] = useState(false);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");

  const navbarOverrides = {
    "Add Pet": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(!showForm)
      }
    },
    Button39493466: {
      children: user?.attributes?.name
    },
    Button39493467: {
      children: "Logout",
      onClick: signOut
    }
  };

  const addPetOverrides = {
    TextField29766922: {
      placeholder: name
    },
    TextField29766923: {
      placeholder: breed
    },
    TextField29766924: {
      placeholder: about
    },
    TextField3863422: {
      placeholder: age
    },
    TextField3863430: {
      placeholder: color
    },
    TextField3863438: {
      placeholder: image
    },
    image: {
      src: updatePet === null ? "https://upload.wikimedia.org/wikipedia/en/9/90/Animal_%282023_film%29_poster.jpg" :
        image
    },
    Button29766926:{
      isDisabled: !!updatePet
    },
    Button3863446: {
      isDisabled: !updatePet
    },
    "MyIcon": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(false)
      }
    }
  };

  const viewPetOverrides = {
    "Icon": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowPetDetails(false)
      }
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavBarHeader2 overrides={navbarOverrides} width={"100%"} />
        <Routes>
          <Route
            path="/"
            element={
              <header className="App-header">
                {showForm && (
                  <AddPet pet={pet} overrides={addPetOverrides} style={{ marginBottom: "1rem", marginTop: "1rem", textAlign: "left" }} />
                )}
                {showPetDetails && (
                  <ReviewCard pet={pet} overrides={viewPetOverrides} style={{ marginBottom: "1rem", marginTop: "1rem" }} />
                )}
                <Pets overrideItems={({ item, index }) => ({
                  overrides: {
                    Breed: { color: "red" },
                    Button29766907: {
                      onClick: () => {
                        setShowPetDetails(true)
                        setPet(item)
                      }
                    },
                    Button38473673: {
                      onClick: () => {
                        if (!showForm) {
                          setShowForm(true)}
                          setUpdatePet(item)
                          setAbout(item.about)
                          setAge(item.age)
                          setBreed(item.breed)
                          setName(item.name)
                          setImage(item.image)
                          setColor(item.color)
                      }
                    }
                  }

                })} />
              </header>
            }
          />
          <Route path="/pet-details" element={<PetDetails />} />
        </Routes>
        <MarketingFooterBrand width={"100%"} />
      </div>
    </BrowserRouter>
  );
}

export default withAuthenticator(App);
