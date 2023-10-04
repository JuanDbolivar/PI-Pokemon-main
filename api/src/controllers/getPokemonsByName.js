const getPokemonsByName = async (req, res) => {
  // req.query
  const {name}=req.query
  res.send(`query ${name}`)
  try {
  } catch (error) {}
};

module.exports=getPokemonsByName
