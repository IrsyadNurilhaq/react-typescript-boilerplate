import { RouteComponentProps } from 'react-router'

export interface Props {
  children: (matchProps: RouteComponentProps) => JSX.Element | null
  matchProps: RouteComponentProps
}
