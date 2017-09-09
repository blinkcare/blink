import React from 'react'
import { Image } from 'rebass'
import { replace } from 'lodash'

const Icon = ({ name = 'square', fill = '#ffffff', size = 48, ...props }) => (
  <Image
    src={`//icon.now.sh/${name}/${size}/${replace(fill, '#', '')}`}
    alt={`${name} icon`}
    style={{ width: size, height: size }}
    display="inline-block"
    {...props}
  />
)

export default Icon
