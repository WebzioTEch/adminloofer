import { Box, ButtonBase, Icon, styled } from '@mui/material';
import useSettings from 'app/hooks/useSettings';
import React, { Fragment } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Paragraph, Span } from '../Typography';
import MatxVerticalNavExpansionPanel from './MatxVerticalNavExpansionPanel';
import './MaxVerticalNavCss.css';

const ListLabel = styled(Paragraph)(({ theme, mode }) => ({
  fontSize: '12px',
  marginTop: '20px',
  marginLeft: '15px',
  marginBottom: '10px',
  textTransform: 'uppercase',
  display: mode === 'compact' && 'none',
  color: 'black !important'
  // color: theme.palette.text.secondary
}));

const ExtAndIntCommon = {
  display: 'flex',
  overflow: 'hidden',
  borderRadius: '4px',
  height: 44,
  whiteSpace: 'pre',
  marginBottom: '8px',
  textDecoration: 'none',
  justifyContent: 'space-between',
  transition: 'all 150ms ease-in',
  color: 'black !important',
  '&:hover': { background: 'rgba(255, 255, 255, 0.08)' },
  '&.compactNavItem': {
    overflow: 'hidden',
    justifyContent: 'center !important',
    color: 'black !important'
  },
  '& .icon': {
    fontSize: '18px',
    paddingLeft: '16px',
    paddingRight: '16px',
    verticalAlign: 'middle',
    color: 'black !important'
  }
};
const ExternalLink = styled('a')(({ theme }) => ({
  ...ExtAndIntCommon,
  color: theme.palette.text.primary
}));

const InternalLink = styled(Box)(({ theme }) => ({
  '& a': {
    ...ExtAndIntCommon,
    color: theme.palette.text.primary
  },
  '& .navItemActive': {
    backgroundColor: 'rgba(255, 255, 255, 0.16)'
  }
}));

const StyledText = styled(Span)(({ mode }) => ({
  fontSize: '0.875rem',
  paddingLeft: '0.8rem',
  display: mode === 'compact' && 'none',
  color: 'black !important'
}));

const BulletIcon = styled('div')(({ theme }) => ({
  padding: '2px',
  marginLeft: '24px',
  marginRight: '8px',
  overflow: 'hidden',
  borderRadius: '300px',
  background: theme.palette.text.primary,
  color: 'black !important'
}));

const BadgeValue = styled('div')(() => ({
  padding: '1px 8px',
  overflow: 'hidden',
  borderRadius: '300px',
  color: 'black !important'
}));

const MatxVerticalNav = ({ items }) => {
  const { settings } = useSettings();
  const { mode } = settings.layout1Settings.leftSidebar;
  var navigate = useNavigate()

  const textAndIconColorClass = 'black !important';

  const renderLevels = (data) => {
    return data.map((item, index) => {
      if (item.type === 'label')
        return (
          <ListLabel
            key={index}
            mode={mode}
            className="sidenavHoverShow"
            style={{ color: 'black !important' }}
          >
            {item.label}
          </ListLabel>
        );

      if (item.children) {
        return (
          <MatxVerticalNavExpansionPanel mode={mode} item={item} key={index}>
            {renderLevels(item.children)}
          </MatxVerticalNavExpansionPanel>
        );
      } else if (item.type === 'extLink') {
        return (
          <ExternalLink
            key={index}
            href={item.path}
            style={{ color: 'black !important' }}
            className={`${mode === 'compact' && 'compactNavItem'}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <ButtonBase key={item.name} name="child" sx={{ width: '100%' }}>
              {(() => {
                if (item.icon) {
                  return (
                    <Icon style={{ color: 'black !important' }} className="icon">
                      {item.icon}
                    </Icon>
                  );
                } else {
                  return (
                    <span style={{ color: 'black !important' }} className="item-icon icon-text">
                      {item.iconText}
                    </span>
                  );
                }
              })()}
              <StyledText mode={mode} className="sidenavHoverShow">
                {item.name}
              </StyledText>
              <Box mx="auto"></Box>
              {item.badge && <BadgeValue>{item.badge.value}</BadgeValue>}
            </ButtonBase>
          </ExternalLink>
        );
      } else {
        return (
          <InternalLink key={index} style={{ color: 'black !important' }}>
            <NavLink
              onClick={e=> {
                e.preventDefault();
                localStorage.removeItem('editBanner')

                setTimeout(() => {
                  navigate(item.path)
                }, 1000);
                // to={item.path}
              }}
              
              style={{ color: 'black !important' }}
              className={({ isActive }) =>
                isActive
                  ? `navItemActive ${mode === 'compact' && 'compactNavItem'}`
                  : `${mode === 'compact' && 'compactNavItem'}`
              }
            >
              <ButtonBase
                key={item.name}
                name="child"
                sx={{ width: '100%', color: 'black !important' }}
              >
                {item?.icon ? (
                  <Icon className="icon" sx={{ width: 36, color: 'black !important' }}>
                    {item.icon}
                  </Icon>
                ) : (
                  <Fragment>
                    <BulletIcon
                      className={`nav-bullet`}
                      style={{ color: 'black !important' }}
                      sx={{ display: mode === 'compact' && 'none', color: 'black !important' }}
                    />
                    <Box
                      className="nav-bullet-text"
                      style={{ color: 'black !important' }}
                      sx={{
                        ml: '20px',
                        fontSize: '11px',
                        display: mode !== 'compact' && 'none',
                        color: 'black !important'
                      }}
                    >
                      {item.iconText}
                    </Box>
                  </Fragment>
                )}
                <StyledText
                  style={{ color: 'black !important' }}
                  mode={mode}
                  className="sidenavHoverShow"
                >
                  {item.name}
                </StyledText>

                <Box mx="auto" />

                {item.badge && (
                  <BadgeValue style={{ color: 'black !important' }} className="sidenavHoverShow">
                    {item.badge.value}
                  </BadgeValue>
                )}
              </ButtonBase>
            </NavLink>
          </InternalLink>
        );
      }
    });
  };

  return <div className={`navigation ${textAndIconColorClass}`}>{renderLevels(items)}</div>;
};

export default React.memo(MatxVerticalNav);
