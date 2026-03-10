import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ColorProgreebar({value,height,color}: {value: number,height?:number,color?:string}) {

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" value={value}  
            sx={{
                height:height?height:8,
                borderRadius:2,
                backgroundColor: '#eee',
                '& .MuiLinearProgress-bar': {
                    backgroundColor: color?color:'primary.main',
                    borderRadius: 10,
                },
            }} 
            color='warning'
        />
      </Box>
    </Box>
  );
}

