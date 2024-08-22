export const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "1px solid #cbcbcb",
    width: "100%",
    height: "47px",
    outline: "none",
    fontSize: "16px",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#cbcbcb",
    },
    color: "#000",
    borderRadius: "6px", // Adicione um pouco de borda arredondada
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: state.isMulti ? "0" : provided.padding,
    paddingLeft: "10px",
    color: "#333333", // Cor do texto
  }),
  container: (provided) => ({
    ...provided,
    width: "100%",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#1190cb" // Azul para o item selecionado
      : state.isFocused
      ? "#E3E3E3"
      : "white",
    color: state.isSelected ? "white" : "#333333", // Texto branco quando selecionado
    "&:hover": {
      backgroundColor: "#cbcbcb",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#cbcbcb", // Cor do valor único
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#666666", // Cor do placeholder
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: 0,
    borderRadius: "4px", // Borda arredondada no menu
    overflow: "hidden", // Para que o menu tenha bordas arredondadas
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Sombra para o menu
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
    border: "1px solid #cbcbcb", // Borda no menu da lista
    borderRadius: "4px", // Borda arredondada
    backgroundColor: "white",
  }),
};
