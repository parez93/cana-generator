export interface InfoItemSection {
  heading: { label?: string | null, required: boolean, show: boolean },
  subHeading: { label?: string | null, required: boolean, show: boolean },
  body: { label?: string | null, required: boolean, show: boolean },
  footer: { label?: string | null, required: boolean, show: boolean }

}
