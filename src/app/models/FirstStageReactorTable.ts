export class FirstStageReactorTable {
    inletTempColName: string = 'Inlet Temp. (°C): '
    inletTempColValue: string = '91.4';

    outletTempColName: string = 'Outlet Temp. (°C): '
    outletTempColValue: string = '139';

    DeltaTColName: string = 'Delta-T (°C):'
    DeltaTColValue: string = '47.3';

    DeltaPColName: string = 'Delta-P (kg/cm)'
    DeltaPColValue: string = '0.13';

    PressColName: string = 'Press (kg/cmg)'
    PressColValue: string = '35.1';

    hydrogenFlow: string = "2649 Nm3/hr"
    recycleFlow: string = "126 m3/hr"
    offGas: string = "400 Nm3/hr"

    HNetGasFlow: string = '1465 Nm3/hr'
    RecycleGasFlow: string = '139 Nm3/hr'

    PureH2Flow: string = '300 Nm3/hr'

    SourWater: string = '35%'
}