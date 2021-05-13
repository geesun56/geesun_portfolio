import React from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';
import Jello from 'react-reveal/Jello';

const useStyles = makeStyles({
    'MenuTabs': {
        display:'inline-block',
        float: 'right',
        listStyle: 'none',
        margin: '0 0%',
        paddingLeft: '10%',
        width: '30%',
        '& li':{
            display: 'inline-block',
            minHeight: '30px',
            cursor:'pointer',
            fontSize: '18px',
            padding: '20px 15px',
            fontFamily: "'Quicksand', serif",
            color: 'rgba(0,0,0,0.5)',
            '&:hover':{
                color: 'rgba(0,0,0,1) !important',
            },
        }
    },
    'active' :{
        fontWeight: 'bold',
        color: 'rgba(0,0,0,1) !important'
    },
    'normal':{
        
    },
    
})
const NavItems = ['Projects', 'About', 'Contact'];

export default function Navigation(props){
    const classes  = useStyles();
    const{menu, setMenu} = props;

    return (<div style={{paddingTop: "20px", overflow:'hidden'}}>
        
        <a href=""><img style={{marginTop: '11px', width: '20%',height: 'auto', display: "inline-block", float: 'left', marginLeft: '20px'}} src="https://fontmeme.com/permalink/210510/4540dabd95c65ea91fb9375e82f61074.png" alt="graffiti-geesun" border="0"/></a>
        <ul className={classes.MenuTabs}>
            {NavItems.map((m)=><li className={clsx({[classes.active] : menu == m })} onClick={() => setMenu(m)} ><Jello when={menu==m}>{m}</Jello></li>)}
            
        </ul>
    </div>)
}