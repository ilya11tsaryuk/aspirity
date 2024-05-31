import { Avatar, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Header = () => {
    return (
        <div className="sticky flex justify-between py-6 w-full">
            <div style={{ width: '180px' }} className="h-10 bg-slate-200"></div>
            <div className="flex gap-2 items-center">
                <button className="hidden md:block">Создать счет</button>
                <button className="hidden md:block">Корзина</button>
                <div style={{ padding: '6px 16px', borderRadius: '18px' }} className="border box-border flex items-center">
                    <Avatar sx={{ width: '24px', height: '24px', padding: 0 }} src="avatar.png" />
                    <IconButton className="p-0">
                        <ExpandMoreIcon className="w-6 h-6 " sx={{ color: 'white' }} />
                    </IconButton>
                </div>
                <IconButton className="p-2 rounded">
                    <MenuIcon sx={{ color: 'white' }} />
                </IconButton>
            </div>
        </div>
    )
}