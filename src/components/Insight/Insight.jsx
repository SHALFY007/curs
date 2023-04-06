import './Insight.css'
import LeftSlide from '../LeftSlide/LeftSlide'
import { Input, Button } from '@mui/material';
import Navigation from '../Navigation/Navigation'

function Insight() {
    return (
        <div className="insight">
            <LeftSlide></LeftSlide>
            <div className="stats-right">
                <div className="stats-block">
                    <div className="stat-block">
                        <p className="stat-txt">Active users</p>
                        <h3 className="stat-header">40%</h3>
                        <svg className='stat-show' width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M80 8C89.4552 8 98.8178 9.86234 107.553 13.4807C116.289 17.099 124.226 22.4025 130.912 29.0883C137.598 35.7741 142.901 43.7114 146.519 52.4468C150.138 61.1822 152 70.5448 152 80C152 89.4552 150.138 98.8178 146.519 107.553C142.901 116.289 137.597 124.226 130.912 130.912C124.226 137.598 116.289 142.901 107.553 146.519C98.8177 150.138 89.4552 152 80 152C70.5448 152 61.1822 150.138 52.4468 146.519C43.7113 142.901 35.7741 137.597 29.0883 130.912C22.4025 124.226 17.099 116.289 13.4807 107.553C9.86233 98.8177 8 89.4551 8 80C8 70.5448 9.86234 61.1822 13.4807 52.4468C17.099 43.7113 22.4025 35.7741 29.0883 29.0883C35.7742 22.4025 43.7114 17.099 52.4468 13.4807C61.1823 9.86232 70.5449 7.99999 80 8L80 8Z" stroke="#F9F5FF" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M80 8C95.2049 8 110.02 12.8136 122.321 21.7508C134.622 30.688 143.777 43.2901 148.476 57.7508C153.175 72.2115 153.175 87.7885 148.476 102.249C143.777 116.71 134.622 129.312 122.321 138.249" stroke="#7F56D9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="stat-block">
                        <p className="stat-txt">Active users</p>
                        <h3 className="stat-header">40%</h3>
                        <svg className='stat-show' width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M80 8C89.4552 8 98.8178 9.86234 107.553 13.4807C116.289 17.099 124.226 22.4025 130.912 29.0883C137.598 35.7741 142.901 43.7114 146.519 52.4468C150.138 61.1822 152 70.5448 152 80C152 89.4552 150.138 98.8178 146.519 107.553C142.901 116.289 137.597 124.226 130.912 130.912C124.226 137.598 116.289 142.901 107.553 146.519C98.8177 150.138 89.4552 152 80 152C70.5448 152 61.1822 150.138 52.4468 146.519C43.7113 142.901 35.7741 137.597 29.0883 130.912C22.4025 124.226 17.099 116.289 13.4807 107.553C9.86233 98.8177 8 89.4551 8 80C8 70.5448 9.86234 61.1822 13.4807 52.4468C17.099 43.7113 22.4025 35.7741 29.0883 29.0883C35.7742 22.4025 43.7114 17.099 52.4468 13.4807C61.1823 9.86232 70.5449 7.99999 80 8L80 8Z" stroke="#F9F5FF" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M80 8C95.2049 8 110.02 12.8136 122.321 21.7508C134.622 30.688 143.777 43.2901 148.476 57.7508C153.175 72.2115 153.175 87.7885 148.476 102.249C143.777 116.71 134.622 129.312 122.321 138.249" stroke="#7F56D9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="stat-block">
                        <p className="stat-txt">Active users</p>
                        <h3 className="stat-header">40%</h3>
                        <svg className='stat-show' width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M80 8C89.4552 8 98.8178 9.86234 107.553 13.4807C116.289 17.099 124.226 22.4025 130.912 29.0883C137.598 35.7741 142.901 43.7114 146.519 52.4468C150.138 61.1822 152 70.5448 152 80C152 89.4552 150.138 98.8178 146.519 107.553C142.901 116.289 137.597 124.226 130.912 130.912C124.226 137.598 116.289 142.901 107.553 146.519C98.8177 150.138 89.4552 152 80 152C70.5448 152 61.1822 150.138 52.4468 146.519C43.7113 142.901 35.7741 137.597 29.0883 130.912C22.4025 124.226 17.099 116.289 13.4807 107.553C9.86233 98.8177 8 89.4551 8 80C8 70.5448 9.86234 61.1822 13.4807 52.4468C17.099 43.7113 22.4025 35.7741 29.0883 29.0883C35.7742 22.4025 43.7114 17.099 52.4468 13.4807C61.1823 9.86232 70.5449 7.99999 80 8L80 8Z" stroke="#F9F5FF" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M80 8C95.2049 8 110.02 12.8136 122.321 21.7508C134.622 30.688 143.777 43.2901 148.476 57.7508C153.175 72.2115 153.175 87.7885 148.476 102.249C143.777 116.71 134.622 129.312 122.321 138.249" stroke="#7F56D9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className="index-block">
                    <div className="index-container">
                        <h1 className="index-header">Store Metrics</h1>
                        <h3 className="index-description">Your current sales summary and activity.</h3>
                        <div className="line"></div>
                        <div className="index-data">
                            <div className="index-currents">
                                <div className="index-current">
                                    <div className="index-current-price">
                                        <p className="index-current-price-title">Bitcoin</p>
                                        <p className="index-current-price-txt">62%</p>
                                    </div>
                                    <svg className='index-current-row' width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.13397 0.500001C3.51887 -0.166666 4.48113 -0.166667 4.86603 0.5L7.4641 5C7.849 5.66667 7.36788 6.5 6.59808 6.5H1.40192C0.632124 6.5 0.150998 5.66667 0.535898 5L3.13397 0.500001Z" fill="#047857"/>
                                    </svg>
                                    <p className="index-current-procents">10.78%</p>
                                </div>
                                <div className="index-current">
                                <div className="index-current-price">
                                        <p className="index-current-price-title">Credit</p>
                                        <p className="index-current-price-txt">12%</p>
                                    </div>
                                    <svg className='index-current-row' width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.13397 0.500001C3.51887 -0.166666 4.48113 -0.166667 4.86603 0.5L7.4641 5C7.849 5.66667 7.36788 6.5 6.59808 6.5H1.40192C0.632124 6.5 0.150998 5.66667 0.535898 5L3.13397 0.500001Z" fill="#047857"/>
                                    </svg>
                                    <p className="index-current-procents">1.08%</p>
                                </div>
                                <div className="index-current">
                                <div className="index-current-price">
                                        <p className="index-current-price-title">Cash</p>
                                        <p className="index-current-price-txt">30%</p>
                                    </div>
                                    <svg className='index-current-row' width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.13397 0.500001C3.51887 -0.166666 4.48113 -0.166667 4.86603 0.5L7.4641 5C7.849 5.66667 7.36788 6.5 6.59808 6.5H1.40192C0.632124 6.5 0.150998 5.66667 0.535898 5L3.13397 0.500001Z" fill="#047857"/>
                                    </svg>
                                    <p className="index-current-procents">5.90%</p>
                                </div>
                            </div>
                            <div className="index-filters">
                                <Input
                                placeholder='Search'></Input>
                                <div className="index-filter">
                                    <Button
                                    variant='outlined'>
                                        Monthly
                                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.75 1L5.75 5L9.75 1" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </Button>
                                    <Button
                                    variant='outlined'>
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3923 4.16667H3.58333C3.1231 4.16667 2.75 4.53976 2.75 5C2.75 5.46024 3.1231 5.83333 3.58333 5.83333H10.3923C10.7355 6.80433 11.6615 7.5 12.75 7.5C13.8385 7.5 14.7645 6.80433 15.1077 5.83333H16.9167C17.3769 5.83333 17.75 5.46024 17.75 5C17.75 4.53976 17.3769 4.16667 16.9167 4.16667H15.1077C14.7645 3.19567 13.8385 2.5 12.75 2.5C11.6615 2.5 10.7355 3.19567 10.3923 4.16667ZM11.9167 5C11.9167 4.53976 12.2898 4.16667 12.75 4.16667C13.2102 4.16667 13.5833 4.53976 13.5833 5C13.5833 5.46024 13.2102 5.83333 12.75 5.83333C12.2898 5.83333 11.9167 5.46024 11.9167 5Z" fill="#64748B"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.91667 7.5C8.00518 7.5 8.93121 8.19567 9.27441 9.16667H16.9167C17.3769 9.16667 17.75 9.53976 17.75 10C17.75 10.4602 17.3769 10.8333 16.9167 10.8333H9.27441C8.93121 11.8043 8.00518 12.5 6.91667 12.5C5.82815 12.5 4.90212 11.8043 4.55892 10.8333H3.58333C3.1231 10.8333 2.75 10.4602 2.75 10C2.75 9.53976 3.1231 9.16667 3.58333 9.16667H4.55892C4.90212 8.19567 5.82815 7.5 6.91667 7.5ZM6.91667 9.16667C7.3769 9.16667 7.75 9.53976 7.75 10C7.75 10.4602 7.3769 10.8333 6.91667 10.8333C6.45643 10.8333 6.08333 10.4602 6.08333 10C6.08333 9.53976 6.45643 9.16667 6.91667 9.16667Z" fill="#64748B"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.58333 14.1667C3.1231 14.1667 2.75 14.5398 2.75 15C2.75 15.4602 3.1231 15.8333 3.58333 15.8333H12.0589C12.4021 16.8043 13.3282 17.5 14.4167 17.5C15.5052 17.5 16.4312 16.8043 16.7744 15.8333H16.9167C17.3769 15.8333 17.75 15.4602 17.75 15C17.75 14.5398 17.3769 14.1667 16.9167 14.1667H16.7744C16.4312 13.1957 15.5052 12.5 14.4167 12.5C13.3282 12.5 12.4021 13.1957 12.0589 14.1667H3.58333ZM15.25 15C15.25 14.5398 14.8769 14.1667 14.4167 14.1667C13.9564 14.1667 13.5833 14.5398 13.5833 15C13.5833 15.4602 13.9564 15.8333 14.4167 15.8333C14.8769 15.8333 15.25 15.4602 15.25 15Z" fill="#64748B"/>
                                        </svg>
                                        Filter
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="index-graph"></div>
                    </div>
                </div>
            </div>
            <div className="insight-navigation">
                <Navigation></Navigation>
            </div>
        </div>
    )
}

export default Insight