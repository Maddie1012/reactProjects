import React, { Component } from 'react';

interface SearchComponentState {
  searchTerm: string;
  isLoading: boolean;
  error: string | null;
  results: any[];
}

class SearchComponent extends Component<{}, SearchComponentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      searchTerm: '', 
      isLoading: false,
      error: null,
      results: [], 
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = async () => {
    const { searchTerm } = this.state;

    console.log('Поиск покемона:', searchTerm);
    
    this.setState({ isLoading: true });

  };

  componentDidMount() {

}

  render() {
    const { searchTerm, isLoading, error, results } = this.state;

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
        
        {error && <p style={{ color: 'red' }}>{error}</p>}

      </div>
    );
  }
}

export default SearchComponent;
