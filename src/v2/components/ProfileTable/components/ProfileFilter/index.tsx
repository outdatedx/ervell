import React, { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router'

import Box from 'v2/components/UI/Box'
import GenericButton from 'v2/components/UI/GenericButton'
import Icon from 'v2/components/UI/Icons'
import Overlay from 'v2/components/UI/Overlay'

import Filter from 'v2/components/ProfileTable/components/ProfileFilter/components/FilterContainer'
import { ConnectableTypeEnum } from '__generated__/globalTypes'
import { updateParams } from 'v2/util/updateParams'

const FilterButton = styled(GenericButton).attrs({
  bg: 'gray.hint',
})`
  border-radius: 0px;
  height: 100%;
  width: 36px;
  border: 0px solid transparent;
  padding: 0;
  border-right: 1px solid ${x => x.theme.colors.gray.light};
  background: ${x => x.theme.colors.gray.cell};
  &:hover {
    border: 0px solid transparent !important;
    border-right: 1px solid ${x => x.theme.colors.gray.light} !important;
  }
`

const Container = styled(Box)`
  position: relative;
  line-height: 0;
  vertical-align: top;
  height: 100%;
  width: 100%;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateZ(1px);
  background-color: ${props => props.theme.colors.gray.cell};
`

const WhiteContainer = styled(Container)`
  background-color: ${props => props.theme.colors.gray.cell};
`

type FilterButtonState =
  | 'resting'
  | 'open'
  | 'active'
  | 'activeAndOpen'
  | 'error'

interface ProfileFilterProps {
  channelId?: number
  addBlock?: () => void
  type?: ConnectableTypeEnum
}

export const ProfileFilter: React.ForwardRefExoticComponent<ProfileFilterProps & {
  ref?: React.Ref<HTMLElement>
}> = React.forwardRef(({ channelId, type }) => {
  const filterRef = useRef<HTMLElement>()
  const filterButtonRef = useRef<HTMLElement>()

  const [filterMode, setFilterMode] = useState<FilterButtonState>('resting')

  const location = useLocation()
  const navigate = useNavigate()

  const handleSetType = useCallback(
    (type: ConnectableTypeEnum) => {
      const queryParams = updateParams(location, { type }, false)
      return navigate(`${location.pathname}?${queryParams}`)
    },
    [location]
  )

  const handleFilterClick = useCallback(() => {
    filterMode == 'open' ? setFilterMode('resting') : setFilterMode('open')
  }, [setFilterMode, filterMode])

  const handleClose = useCallback(() => {
    setTimeout(() => {
      setFilterMode('resting')
    }, 100)
  }, [setFilterMode])

  return (
    <WhiteContainer>
      <Box position="relative" ref={filterRef} height="100%">
        <FilterButton f={1} onClick={handleFilterClick} ref={filterButtonRef}>
          <Icon name="Filters" size="1rem" />
        </FilterButton>
        {filterRef.current &&
          (filterMode == 'open' || filterMode === 'activeAndOpen') && (
            <Overlay
              alignToY="bottom"
              alignToX="right"
              anchorY="top"
              anchorX="right"
              targetEl={() => filterRef.current}
              offsetY={5}
              onClose={handleClose}
            >
              <Filter id={channelId} type={type} setType={handleSetType} />
            </Overlay>
          )}
      </Box>
    </WhiteContainer>
  )
})
