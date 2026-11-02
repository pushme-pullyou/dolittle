// Workshop tools only; not included in the assembled app.
const fetchInstallList = async ( url ) => {
  const response = await fetch( url, { cache: 'no-store' } );
  if ( !response.ok ) throw new Error( `HTTP ${ response.status }` );
  const text = await response.text();
  const targets = text.split( /^## /m ).find( ( section ) => /^Targets[ \t]*\r?\n/.test( section ) );
  if ( !targets ) throw new Error( 'Targets section not found' );
  const rows = targets.split( /\r?\n/ ).filter( ( line ) => /^\|\s*`/.test( line ) );
  if ( !rows.length ) throw new Error( 'No install rows found' );
  return rows.map( ( row ) => {
    const cells = row.split( '|' ).slice( 1, -1 ).map( ( cell ) => cell.trim() );
    const identity = /^([\w.-]+)\/([\w.-]+)$/.exec( cells[ 1 ] || '' );
    if ( cells.length !== 3 || !/^`[^`]+[\\/]index\.html`$/i.test( cells[ 0 ] ) || !identity || !cells[ 2 ] ) {
      throw new Error( `Invalid install row: ${ row }` );
    }
    return { name: cells[ 1 ], owner: identity[ 1 ], repo: identity[ 2 ], branch: cells[ 2 ] };
  } );
};
