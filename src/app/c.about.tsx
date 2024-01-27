//mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AboutImage from '@/assets/images/about.png';

export default function About() {
  return (
    <Box component="section" sx={{ paddingTop: '120px', paddingBottom: '200px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: '672px',
          backgroundImage: `url(${AboutImage.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <Box
          sx={{
            position: 'relative',
            top: { sm: '40px', md: '80px' },
            paddingLeft: { sm: '40px', md: '15%' },
            paddingRight: { sm: '15px' },
            margin: '0 auto',
          }}>
          <Box
            sx={{
              maxWidth: '1044px',
              padding: { sm: '24px', md: '80px' },
              borderRadius: { sm: '40px 40px 0px 40px', md: '80px 80px 0px 80px' },
              borderBottom: '1px solid #FFF',
              borderLeft: '1px solid #FFF',
              background: 'linear-gradient(180deg, rgba(20, 15, 10, 0.80) 0%, rgba(190, 156, 124, 0.80) 100%)',
              backdropFilter: 'blur(10px)',
            }}>
            {/* 關於我們 */}
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: { sm: '40px', md: '80px' } }}>
                <Box>
                  <Typography
                    color="white"
                    sx={{
                      whiteSpace: 'nowrap',
                      fontSize: { sm: '32px', md: '48px' },
                      fontWeight: { sm: 'bold', md: 'bold' },
                    }}>
                    關於
                  </Typography>
                  <Typography
                    color="white"
                    sx={{
                      whiteSpace: 'nowrap',
                      fontSize: { sm: '32px', md: '48px' },
                      fontWeight: { sm: 'bold', md: 'bold' },
                    }}>
                    我們
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: { sm: '100px', md: '165px' },
                    height: '2px',
                    backgroundColor: 'white',
                    marginLeft: '40px',
                  }}></Box>
              </Box>
              <Box>
                <Typography color="white" sx={{ marginBottom: { sm: '16px', md: '40px' } }}>
                  享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
                  我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
                </Typography>
                <Typography color="white" sx={{ marginBottom: { sm: '16px', md: '40px' } }}>
                  我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
                  我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
                </Typography>
                <Typography color="white" sx={{ marginBottom: { sm: '16px', md: '40px' } }}>
                  在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
                </Typography>
                <Typography color="white">
                  享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
