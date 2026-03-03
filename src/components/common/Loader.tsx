import Modal from '@mui/material/Modal';
import { ThreeDot } from 'react-loading-indicators';


function Loader({ open, onClose }: {
    open: boolean;
    onClose: () => void;
}) {

    return (
        <Modal open={open} onClose={() => onClose()}>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <ThreeDot variant="brick-stack" color="#32cd32" size="large" text="" textColor="" />
            </div>
        </Modal>
    );
}

export default Loader; 