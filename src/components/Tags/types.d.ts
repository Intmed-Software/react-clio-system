import React from 'react'
import sizes from "../../patters/sizes"
import colors from "../../patters/colors"

export interface TagsProps extends React.HTMLAttributes<HTMLDivElement> {
    size: keyof Pick<typeof sizes, 'display' | 'medium'>
    color: keyof Pick<typeof colors, 'lightBlue' | 'darkBlue' | 'lightSuccess' | 'darkSuccess' | 'lightAlert' | 'darkAlert' | 'lightError' | 'darkError'>
    text: string;
    icon?: boolean
}

