import { useState, useEffect } from 'react'
import Card from './components/Card'
import Pagenation from './components/Pagenation'
import styled from 'styled-components'

function App({match}) {
  const pageNumber = match.params.pageNumber || 1

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(pageNumber)
  const [pages, setPages] = useState(1)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/v1/posts?page=${page}`)
        const { data, pages: totalPages } = await res.json()
        setPages(totalPages)
        setPosts(data)
        setLoading(false)
      } catch(error) {
        console.error(error)
        setLoading(false)
        setError('Some error occured')
      }
    }
    fetchPosts()
  }, [page])
  return (
    <Container>
      <Pagenation/>
      <AppPosts>
        {posts.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </AppPosts>
      <Pagenation/>
    </Container>
  );
}

const Container = styled.div`
max-width: 1400px;
margin: 5rem auto;
`;

const AppPosts = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
`;

export default App;
