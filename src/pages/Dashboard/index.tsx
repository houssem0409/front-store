import * as React from 'react';

import NavBar from "../../components/Navbar";
import { List } from "@mui/material";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Transactions from "../../components/Transactions";
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import UsersTable from '../../components/user/UsersTable';
import ProductsTable from '../../components/product/ProductsTable';
import CategoriesTable from '../../components/category/CategoriesTable';
import OrdersTable from '../../components/order/OrdersTable';
const drawerWidth = 240;

export default function Dashboard(props : any) {
 
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [currentView , setCurrentView] = React.useState("Users")
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <div style={{justifyContent : "center" , alignContent : 'center' , alignItems : "center"  }}>
        <Toolbar />
        <Divider />
        <List>
          {['Categories', 'Products', 'Users', 'Orders'].map((text, index) => (
            <ListItem key={text} disablePadding  onClick={() => setCurrentView(text) } >
              <ListItemButton>
                <ListItemIcon>
                  {text === 'Categories' && <CategoryIcon /> }
                  {text === 'Products' && <InventoryIcon /> }
                  {text === 'Users' && <PersonIcon /> }
                  {text === 'Orders' && <ProductionQuantityLimitsIcon /> }
                  


                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  return (
    
    <div style={{backgroundColor : "#a2a2a2" , height : 800 , paddingLeft : "20%"}}>
        <NavBar> 

      <Box flexDirection="row" display="flex" width="100%" >
      <Box sx={{ display: 'flex' , flexDirection:"row"  , width : "100%" , height : "100%" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
    
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
     
      </Box>
    </Box>
      </Box>


        </NavBar>
        {currentView === "Users" &&
        <UsersTable/>
        }
         {currentView === "Products" &&
        <ProductsTable/>
        }
         {currentView === "Categories" &&
        <CategoriesTable/>
        }
         {currentView === "Orders" &&
        <OrdersTable/>
        }

    </div>
  );
  
}

