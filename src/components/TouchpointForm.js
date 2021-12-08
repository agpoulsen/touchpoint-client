import React from 'react'

export default function TouchpointForm() {
  return (
    <form>

      <label>
        Touchpoint Type:
        <input type="text" name='touchpointType' />
      </label>

      <label>
        Date:
        <input type="date" name='date' />
      </label>

      <label>
        Company Name:
        <input type="text" name='companyName' />
      </label>

      <label>
        Role Position:
        <input type="text" name='roleOrPosition' />
      </label>

      <label>
        Contact Person:
        <input type="text" name='contactPerson' />
      </label>

      <label>
        Additional Notes:
        <input type="text" name='additionalNotes' />
      </label>

      <button>Submit</button>
    </form>
  )
}
