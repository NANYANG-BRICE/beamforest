// assets
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import GridViewIcon from '@mui/icons-material/GridView';


// constant
const icons = {
  GridViewIcon,
  ElectricBoltIcon,
  SettingsInputAntennaIcon,
  QuestionMarkIcon,
  StackedLineChartIcon
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  // title: 'Pages',
  type: 'group',
  children: [
    {
      id: '',
      title: 'Dashboard',
      type: 'item',
      url: '',
      icon: icons.GridViewIcon,
      breadcrumbs: false
    },

    {
      id: 'previsions',
      title: 'Previsions',
      type: 'item',
      url: 'previsions',
      icon: icons.StackedLineChartIcon,
      breadcrumbs: false
    },

    {
      id: 'et-cap',
      title: 'ET-CAP',
      type: 'item',
      url: 'et-cap',
      icon: icons.ElectricBoltIcon,
      breadcrumbs: false
    },

    {
      id: 'dim',
      title: 'Dim',
      type: 'item',
      url: 'dim',
      icon: icons.SettingsInputAntennaIcon,
      breadcrumbs: false
    },

    {
      id: 'aide',
      title: 'Aide',
      type: 'item',
      url: 'aide',
      icon: icons.QuestionMarkIcon,
      breadcrumbs: false
    },
  ]
};

export default utilities;
