import Link from 'next/link';
import { useRouter } from 'next/router';
import Seo from '../components/Seo'

export default function Home({ results }: any) {
  const router = useRouter();
  const onClick = (id: any, title: any) => {
    router.push(`/movies/${title}/${id}`);
  }
  return (
    <div className='container'>
      <Seo title="Home" />
      {results?.map((movie: any) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)} 
          className="movie" 
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps() { // 함수명 지켜야 함, export도 반드시.
  // 이 자리에 쓰는 코드는 server에서 돌아가게 된다. 클라이언트가 아닌 서버 쪽에서만 작동.
  // 그렇다면 이걸 이용해서 api key를 숨길 수도 있다
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results,
    }
  }
  
  // const [movies, setMovies] = useState();
  // useEffect(() => {
  //   (async () => {
  //     setMovies(results);
  //   })();
  // },[]);
  // {!movies && <h4>Loading...</h4>}
}