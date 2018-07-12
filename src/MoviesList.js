/* eslint react/no-did-mount-set-state: 0 */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

class MoviesList extends PureComponent {
	state = {
		movies: []
	};

	async componentDidMount() {
		try {
			const res1 = await fetch(
				'https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1'
			);
			/* 			const res2 = await fetch(
				'https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=2'
			);
			const res3 = await fetch(
				'https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=3'
			);

			const res4 = await fetch(
				'https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=4'
			);

			const res5 = await fetch(
				'https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=5'
			); */

			const movies = await res1.json();
			this.setState({
				movies: movies.results
			});
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		return <MovieGrid>{this.state.movies.map((movie) => <Movie key={movie.id} movie={movie} />)}</MovieGrid>;
	}
}

export default MoviesList;

const MovieGrid = styled.div`
	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(6, 1fr);
	grid-row-gap: 1rem;
`;
