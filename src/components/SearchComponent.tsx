import React, { Component } from 'react';

interface State {
  searchTerm: string;
  isLoading: boolean;
  error: string | null;
}

class SearchComponent extends Component<object, State> {
  state: State = {
    searchTerm: '',
    isLoading: false,
    error: null,
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = async () => {
    const { searchTerm } = this.state;

    if (!searchTerm) {
      this.setState({ error: 'Введите имя покемона' });
      return;
    }

    this.setState({ isLoading: true, error: null });

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Покемон не найден');
      }

      const data = await response.json();
      console.log('Результат поиска:', data);
    } catch (error) {
      this.setState({ error: (error as Error).message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleLoading = () => {
    const {isLoading} = this.state;

  }

  render() {
    const { searchTerm, isLoading, error } = this.state;

    return (
      <div className="search-section">
        <h2>Поиск покемонов</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={this.handleInputChange}
          placeholder="Введите имя покемона"
        />
        <button onClick={this.handleSearch}>Поиск</button>

        {isLoading && <p>Загрузка...</p>}
        {error && <p>{error}</p>}
      </div>
    );
  }
}

export default SearchComponent;
