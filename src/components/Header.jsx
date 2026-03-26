export default function Header({ inputValue, setInputValue, addTask }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="todo-form">
      <input
        className="todo-input"
        type="text"
        placeholder="Что нужно сделать?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="todo-button"
        onClick={addTask}
        disabled={!inputValue.trim()}
      >
        Добавить
      </button>
    </div>
  );
}