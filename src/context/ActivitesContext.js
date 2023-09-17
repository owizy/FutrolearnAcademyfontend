import { createContext, useState, useEffect } from 'react'

export const ActiviesContext = createContext()
export const  ActiviesProvider = ({ children }) => {
  const [activities, setActivities] = useState(localStorage.getItem('activities') ? JSON.parse(localStorage.getItem('activities')) : [])

const addToActivities = (item) => {
    const isActivitiesInCart = activities.find((cartItem) => cartItem.id === item.id);

    if (isActivitiesInCart) {
      setActivities(
        activities.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
            )
      );
    } else {
      setActivities([...activities, { ...item, quantity: 1 }]);
    }
  };

const removeActivities = (item) => {
    const isActivitiesInCart = activities.find((cartItem) => cartItem.id === item.id);

    if (isActivitiesInCart.quantity === 1) {
      setActivities(activities.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setActivities(
        activities.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };


useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

useEffect(() => {
    const Activies = localStorage.getItem("activities");
    if (Activies) {
      setActivities(JSON.parse(Activies));
    }
  }, []);

  return (
    <ActiviesContext.Provider
      value={{
       addToActivities,
       removeActivities,
       activities
      }}
    >
      {children}
    </ActiviesContext.Provider>
  );
};