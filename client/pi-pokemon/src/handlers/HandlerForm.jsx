import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setNewPokwmon,
  setPokImagen,
  setPokVida,
  setPokAtaque,
  setPokDefensa,
  setPokVelocidad,
  setPokAltura,
  setPokPeso,
  setPokTypes,
  unSetPok,
} from "../redux/counters/pokemonCreate/pokemonCreateSlice";

export const HandlerForm = () => {
  const dispatch = useDispatch();

  const {
    nombre,
    imagen,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
    types,
  } = useSelector((state) => state.newPokemon);

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    dispatch(setNewPokwmon({ [property]: value }));
  };
  const handleIChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    dispatch(setPokImagen({ [property]: value }));
  };
  const handleVChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    dispatch(setPokVida({ [property]: value }));
  };
  const handleAChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    dispatch(setPokAtaque({ [property]: value }));
  };
  const handleDChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    dispatch(setPokDefensa({ [property]: value }));
  };
  const handleVelChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    dispatch(setPokVelocidad({ [property]: value }));
  };
  const handleAlChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    dispatch(setPokAltura({ [property]: value }));
  };
  const handlePChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    dispatch(setPokPeso({ [property]: value }));
  };
  const handleTChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    if (types.includes(value)) {
      return;
    }
    dispatch(setPokTypes({ [property]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3001/poquemons/", {
        nombre,
        imagen,
        vida,
        ataque,
        defensa,
        velocidad,
        altura,
        peso,
        types,
      });
      window.alert(data);
      dispatch(unSetPok());
    } catch (error) {
      window.alert(error.message);
    }
  };

  return {
    handleChange,
    handleIChange,
    handleSubmit,
    handleVChange,
    handleAChange,
    handleDChange,
    handleVelChange,
    handleAlChange,
    handlePChange,
    handleTChange,
  };
};
