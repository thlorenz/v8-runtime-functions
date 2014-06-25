{
  'targets': [
    {
      'target_name': 'runtime_functions',
      'sources': [
         'src/runtime_functions.cc'
      ],
      'include_dirs': [
        '<!(node -e "require(\'nan\')")'
      ]
    }
  ]
}
