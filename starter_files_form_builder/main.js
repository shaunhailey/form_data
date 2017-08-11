// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    type: 'text',
    label: 'First Name',
    id: 'user-first-name',
    icon: 'fa-user',
    options: []
  },
  {
    type: 'text',
    label: 'Last Name',
    id: 'user-last-name',
    icon: 'fa-user',
    options: []
  },
  {
    type: 'email',
    label: 'Email Address',
    id: 'user-email',
    icon: 'fa-envelope',
    options: []
  },
  {
    type: 'text',
    label: 'Current Website URL',
    id: 'user-website',
    icon: 'fa-globe',
    options: []
  },
  {
    type: 'select',
    label: 'Select Language',
    id: 'user-language',
    icon: '',
    options: [
      {
        label: 'English',
        value: 'EN'
      },
      {
        label: 'French',
        value: 'FR'
      },
      {
        label: 'Spanish',
        value: 'SP'
      },
      {
        label: 'Chinese',
        value: 'CH'
      },
      {
        label: 'Japanese',
        value: 'JP'
      }
    ]
  },
  {
    type: 'textarea',
    label: 'Your Comment',
    id: 'user-comment',
    icon: 'fa-comments',
    options: []
  },
  {
    type: 'tel',
    label: 'Mobile Number',
    id: 'user-mobile',
    icon: 'fa-mobile-phone',
    options: []
  },
  {
    type: 'tel',
    label: 'Home Number',
    id: 'user-phone',
    icon: 'fa-phone',
    options: []
  }
]

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
;(function() {
  // Select the first element from the array
  let first = formData[0]
  // Log the first object
  console.log(first)
  // Log the string "First Name"
  console.log(first.label)
})()

// -------- Your Code Goes Below this Line --------
let _fields = document.getElementById('fields')

for (var i = 0; i < formData.length; i++) {
  let _data = formData[i]
  if (_data.type === 'textarea') {
    let textarea = document.createElement('textarea')
    textarea.placeholder = _data.label
    textarea.id = _data.id

    _fields.appendChild(textarea)
  } else if (_data.type === 'select') {
    let select = document.createElement('select')
    select.id = _data.id
    let placeholder = document.createElement('option')
    placeholder.value = 0
    placeholder.innerHTML = _data.label
    select.appendChild(placeholder)

    for (var j = 0; j < _data.options.length; j++) {
      let _opt = _data.options[j]
      let option = document.createElement('option')
      option.value = _opt.value
      option.innerHTML = _opt.label
      select.appendChild(option)
    }
    _fields.appendChild(select)
  } else {
    let element = document.createElement('input')
    element.type = _data.type
    element.placeholder = _data.label
    element.id = _data.id
    _fields.appendChild(element)
  }
}
