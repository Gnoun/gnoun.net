<template>
	<div>
		<Markdown id="math-tools/top" />
		<br />
		<div class="border-2 table mb-2">
			<div class="border-b text-center p-1"><b>{{ $t('math.table.title') }}</b></div>
			<div class="p-1">
				<div>
					1. <b>{{ $t('math.table.group1') }}</b>
					<div class="indent-4">
						<div>a. <GnounLink to="/math#fractions">{{ $t('math.table.tool1a') }}</GnounLink></div>
						<div>b. <GnounLink to="/math#gcf" >{{ $t('math.table.tool1b') }}</GnounLink></div>
						<div>c. <GnounLink to="/math#lcm" >{{ $t('math.table.tool1c') }}</GnounLink></div>
						<div>d. <GnounLink to="/math#degree_to_radian" >{{ $t('math.table.tool1d') }}</GnounLink></div>
						<div>e. <GnounLink to="/math#radian_to_degree" >{{ $t('math.table.tool1e') }}</GnounLink></div>
					</div>
				</div>
				<div>
					2. <b>{{ $t('math.table.group2') }}</b>
					<div class="indent-4">
						<div>
							A. {{ $t('math.table.group2A') }}
							<div class="indent-8">
								<div>a. <GnounLink to="/math#magnitude" >{{ $t('math.table.tool2Aa') }}</GnounLink></div>
								<div>b. <GnounLink to="/math#vector_cartesian_to_polar" >{{ $t('math.table.tool2Ab') }}</GnounLink></div>
								<div>c. <GnounLink to="/math#vector_polar_to_cartesian" >{{ $t('math.table.tool2Ac') }}</GnounLink></div>
							</div>
						</div>
						<div>
							B. {{ $t('math.table.group2B') }}
							<div class="indent-8">
								<div>a. <GnounLink to="/math#distance_between_points" >{{ $t('math.table.tool2Ba') }}</GnounLink></div>
								<div>b. <GnounLink to="/math#midpoint" >{{ $t('math.table.tool2Bb') }}</GnounLink></div>
								<div>c. <GnounLink to="/math#distance_between_lines" >{{ $t('math.table.tool2Bc') }}</GnounLink></div>
								<div>d. <GnounLink to="/math#distance_between_line_and_point" >{{ $t('math.table.tool2Bd') }}</GnounLink></div>
							</div>
						</div>
					</div>
				</div>
				<div>
					3. <b>{{ $t('math.table.group3') }}</b>
					<div class="indent-4">
						<div>a. <GnounLink to="/math#complex_division" >{{ $t('math.table.tool3a') }}</GnounLink></div>
						<div>b. <GnounLink to="/math#complex_division_polar" >{{ $t('math.table.tool3b') }}</GnounLink></div>
						<div>c. <GnounLink to="/math#complex_rectangular_to_polar" >{{ $t('math.table.tool3c') }}</GnounLink></div>
						<div>d. <GnounLink to="/math#complex_polar_to_rectangular" >{{ $t('math.table.tool3d') }}</GnounLink></div>
					</div>
				</div>
				<div>4. <GnounLink to="/math#external-links" >{{ $t('math.table.ext') }}</GnounLink></div>
			</div>
		</div>
		<Markdown id="math-tools/after-table-of-contents" />
		<ReturnToTop class="my-2" />
		<MathTool :tool="tools.fractions">
			{{ $t('math.frac.input') }}:
			<div><NumberInput :onUpdate="frac1" /> <span class="text-xs">{{ $t('math.frac.com1') }}</span></div>
			———
			<div><NumberInput :onUpdate="frac2" /> <span class="text-xs">{{ $t('math.frac.com2') }}</span></div>
			<br />
			{{ $t('math.frac.output') }}:
			<div>{{ values.frac.result1 }}</div>
			——	
			<div>{{ values.frac.result2 }}</div>
			<div class="text-xs">{{ $t('math.frac.outcom') }}</div>
		</MathTool>
		<MathTool :tool="tools.gcf">
			<div>{{ $t('math.gcf.input1') }}: <NumberInput :onUpdate="gcf1" /></div>
			<div>{{ $t('math.gcf.input2') }}: <NumberInput :onUpdate="gcf2" /></div>
			<br />
			<div>{{ $t('math.gcf.output') }}: {{ values.gcf.result }}</div>
		</MathTool>
		<MathTool :tool="tools.lcm">
			<div>{{ $t('math.lcm.input1') }}: <NumberInput :onUpdate="lcm1" /></div>
			<div>{{ $t('math.lcm.input2') }}: <NumberInput :onUpdate="lcm2" /></div>
			<br />
			<div>{{ $t('math.lcm.output') }}: {{ values.lcm.result }}</div>
		</MathTool>
		<MathTool :tool="tools.degree_to_radian">
			<div>{{ $t('math.degtorad.input') }}: <NumberInput :onUpdate="deg" />°</div>
			<br />
			<div>{{ $t('math.degtorad.output') }}: {{ values.degtorad.result }}<span v-if="values.degtorad.result">π</span></div>
		</MathTool>
		<MathTool :tool="tools.radian_to_degree">
			<div>{{ $t('math.degtorad.output') }}: <NumberInput :onUpdate="rad" />°</div>
			<br />
			<div>{{ $t('math.degtorad.input') }}: {{ values.radtodeg.result }}<span v-if="values.degtorad.result">°</span></div>
		</MathTool>
		<MathTool :tool="tools.magnitude">
			{{ $t('math.magnitude.input') }}:
			<div>x = <NumberInput :onUpdate="mag1" /> y = <NumberInput :onUpdate="mag2" /></div>
			<br />
			<div>{{ $t('math.magnitude.output') }}: {{ values.magnitude.result }}</div>
		</MathTool>
		<MathTool :tool="tools.vector_cartesian_to_polar">
			{{ $t('math.vctp.input') }}:
			<div>x = <NumberInput :onUpdate="vctp1" /> </div>
			<div>y = <NumberInput :onUpdate="vctp2" /> </div>
			<br />
			{{ $t('math.vctp.output') }}:
			<div>r = {{ values.vctp.result1 }}</div>
			<div>θ = {{ values.vctp.result2 }}<span v-if="values.vctp.result2">°</span></div>
		</MathTool>
		<MathTool :tool="tools.vector_polar_to_cartesian">
			{{ $t('math.vctp.output') }}:
			<div>r = <NumberInput :onUpdate="vptc1" /> </div>
			<div>θ = <NumberInput :onUpdate="vptc2" />° </div>
			<br />
			{{ $t('math.vctp.input') }}:
			<div>x = {{ values.vptc.result1 }}</div>
			<div>y = {{ values.vptc.result2 }}</div>
		</MathTool>
		<MathTool :tool="tools.distance_between_points">
			{{ $t('math.dbp.input1') }}:
			<div>x = <NumberInput :onUpdate="dbp1" /> y = <NumberInput :onUpdate="dbp2" /> </div>
			{{ $t('math.dbp.input2') }}:
			<div>x = <NumberInput :onUpdate="dbp3" /> y = <NumberInput :onUpdate="dbp4" /> </div>
			<br />
			<div>{{ $t('math.dbp.output') }}: {{ values.dbp.result }}</div>
		</MathTool>
		<MathTool :tool="tools.midpoint">
			{{ $t('math.dbp.input1') }}:
			<div>x = <NumberInput :onUpdate="midp1" /> y = <NumberInput :onUpdate="midp2" /> </div>
			{{ $t('math.dbp.input2') }}:
			<div>x = <NumberInput :onUpdate="midp3" /> y = <NumberInput :onUpdate="midp4" /> </div>
			<br />
			<div>{{ $t('math.midpt.output') }}: ({{ values.midp.result1 }}, {{ values.midp.result2 }})</div>
		</MathTool>
		<MathTool :tool="tools.distance_between_lines">
			<u>{{ $t('math.dbl.input1') }}:</u>
			<div>y<sub>1</sub> = <NumberInput :onUpdate="dbl1" />x + <NumberInput :onUpdate="dbl2" /></div>
			<div>y<sub>2</sub> = {{ values.dbl.p1 }}x + <NumberInput :onUpdate="dbl3" /></div>
			<br />
			<div>{{ $t('math.dbp.output') }}: {{ values.dbl.result1 }}</div>
			<br />
			<u>{{ $t('math.dbl.input2') }}:</u>
			<div>{{ $t('math.dbl.input2a') }} 1: <NumberInput :onUpdate="dbl4" />x + <NumberInput :onUpdate="dbl5" />y + <NumberInput :onUpdate="dbl6" /> = 0</div>
			<div>{{ $t('math.dbl.input2a') }} 2: {{ values.dbl.p4 }}x + {{ values.dbl.p5 }}y + <NumberInput :onUpdate="dbl7" /> = 0</div>
			<br />
			<div>{{ $t('math.dbp.output') }}: {{ values.dbl.result2 }}</div>
		</MathTool>
		<MathTool :tool="tools.distance_between_line_and_point">
			<u>{{ $t('math.dbl.input2') }}:</u>
			<div>y<sub>1</sub> = <NumberInput :onUpdate="dblap1" />x + <NumberInput :onUpdate="dblap2" />y + <NumberInput :onUpdate="dblap3" /></div>
			<div>y<sub>2</sub> = (<NumberInput :onUpdate="dblap4" />, <NumberInput :onUpdate="dblap5" />)</div>
			<br />
			<div>{{ $t('math.dbp.output') }}: {{ values.dblap.result }}</div>
		</MathTool>
		<MathTool :tool="tools.complex_division">
			<div>z<sub>1</sub> = <NumberInput :onUpdate="cpd1" /> + <NumberInput :onUpdate="cpd2" /> i </div>
			<div>z<sub>2</sub> = <NumberInput :onUpdate="cpd3" /> + <NumberInput :onUpdate="cpd4" /> i </div>
			<br />
			<div>{{ $t('math.result') }}: {{ values.cpd.result1 }}<span v-if="values.cpd.result2"> + {{ values.cpd.result2 }}i</span></div>
		</MathTool>
		<MathTool :tool="tools.complex_division_polar">
			<div>z<sub>1</sub> = <NumberInput :onUpdate="cpdp1" />*[cos(<NumberInput :onUpdate="cpdp2" />) + i*sin({{ values.cpdp.p2 }})] </div>
			<div>z<sub>2</sub> = <NumberInput :onUpdate="cpdp3" />*[cos(<NumberInput :onUpdate="cpdp4" />) + i*sin({{ values.cpdp.p4 }})] </div>
			<br />
			<div>{{ $t('math.result') }}: {{ values.cpdp.result1 }}<span v-if="values.cpdp.result2">*[cos({{ values.cpdp.result2 }}°) + i*sin({{ values.cpdp.result2 }}°)]</span></div>
		</MathTool>
		<MathTool :tool="tools.complex_rectangular_to_polar">
			<div>z: <NumberInput :onUpdate="crtp1" /> + <NumberInput :onUpdate="crtp2" /> i</div>
			<br />
			<div>{{ $t('math.result') }}: {{ values.crtp.result1 }}<span v-if="values.crtp.result2">*[cos({{ values.crtp.result2 }}°) + i*sin({{ values.crtp.result2 }}°)]</span></div>
		</MathTool>
		<MathTool :tool="tools.complex_polar_to_rectangular">
			<div>z: <NumberInput :onUpdate="cptr1" />*[cos(<NumberInput :onUpdate="cptr2" />) + i*sin({{ values.cptr.p2 }})]</div>
			<br />
			<div>{{ $t('math.result') }}: {{ values.cptr.result1 }}<span v-if="values.cptr.result2"> + {{ values.cptr.result2 }}i</span></div>
		</MathTool>
		<hr class="my-3" />
		<Markdown id="math-tools/bottom" />
		<br />
		<ReturnToTop />
	</div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, 'Math Tools', 'math');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
	data() {
		let values = {
			frac: {
				p1: null,
				p2: null,
				result1: Number.NaN,
				result2: Number.NaN,
			},
			gcf: {
				p1: null,
				p2: null,
				result: null,
			},
			lcm: {
				p1: null,
				p2: null,
				result: null,
			},
			degtorad: {
				result: null,
			},
			radtodeg: {
				result: null,
			},
			magnitude: {
				p1: null,
				p2: null,
				result: null,
			},
			vctp: {
				p1: null,
				p2: null,
				result1: null,
				result2: null,
			},
			vptc: {
				p1: null,
				p2: null,
				result1: null,
				result2: null,
			},
			dbp: {
				p1: null,
				p2: null,
				p3: null,
				p4: null,
				result: null,
			},
			midp: {
				p1: null,
				p2: null,
				p3: null,
				p4: null,
				result1: null,
				result2: null,
			},
			dbl: {
				p1: null,
				p2: null,
				p3: null,
				p4: null,
				p5: null,
				p6: null,
				p7: null,
				result1: null,
				result2: null,
			},
			dblap: {
				p1: null,
				p2: null,
				p3: null,
				p4: null,
				p5: null,
				result: null,
			},
			cpd: {
				p1: null,
				p2: null,
				p3: null,
				p4: null,
				result1: null,
				result2: null,
			},
			cpdp: {
				p1: null,
				p2: null,
				p3: null,
				p4: null,
				result1: null,
				result2: null,
			},
			crtp: {
				p1: null,
				p2: null,
				result1: null,
				result2: null,
			},
			cptr: {
				p1: null,
				p2: null,
				result1: null,
				result2: null,
			},
		};
		return { values };
	},
	methods: {
		ns2(x) {
		},
		ns8(x) {
		},
		ns10(x) {
		},
		ns16(x) {
		},
		frac1(x) {
			this.values.frac.p1 = x;
			this.frac();
		},
		frac2(x) {
			this.values.frac.p2 = x;
			this.frac();
		},
		frac() {
			let gcf = this.gcfInternal(this.values.frac.p1, this.values.frac.p2);
			this.values.frac.result1 = this.values.frac.p1 / gcf;
			this.values.frac.result2 = this.values.frac.p2 / gcf;
		},
		gcf1(x) {
			this.values.gcf.p1 = x;
			this.gcf();
		},
		gcf2(x) {
			this.values.gcf.p2 = x;
			this.gcf();
		},
		gcf() {
			this.values.gcf.result = this.gcfInternal(this.values.gcf.p1, this.values.gcf.p2);
		},
		gcfInternal(p1, p2) {
			if (p1 == null || p2 == null) return null;
			if (p1 == 0) return p2;
			if (p2 == 0) return p1;
			let p3 = p1 % p2;
			return this.gcfInternal(p2, p3);
		},
		lcm1(x) {
			this.values.lcm.p1 = x;
			this.lcm();
		},
		lcm2(x) {
			this.values.lcm.p2 = x;
			this.lcm();
		},
		lcm() {
			this.values.lcm.result = this.values.lcm.p1 * this.values.lcm.p2 / this.gcfInternal(this.values.lcm.p1, this.values.lcm.p2);
		},
		deg(x) {
			this.values.degtorad.result = x / 180;
		},
		rad(x) {
			this.values.radtodeg.result = x * 180;
		},
		mag1(x) {
			this.values.magnitude.p1 = x;
			this.magnitude();
		},
		mag2(x) {
			this.values.magnitude.p2 = x;
			this.magnitude();
		},
		magnitude() {
			this.values.magnitude.result = Math.sqrt(Math.pow(this.values.magnitude.p1, 2) + Math.pow(this.values.magnitude.p2, 2));
		},
		vctp1(x) {
			this.values.vctp.p1 = x;
			this.vctp();
		},
		vctp2(x) {
			this.values.vctp.p2 = x;
			this.vctp();
		},
		vctp(){
			this.values.vctp.result1 = Math.sqrt(Math.pow(this.values.vctp.p1, 2) + Math.pow(this.values.vctp.p2, 2));
			if (this.values.vctp.p1 > 0 && this.values.vctp.p2 > 0) this.values.vctp.result2 = Math.atan(this.values.vctp.p2 / this.values.vctp.p1) * 180 / Math.PI;
			else if (this.values.vctp.p1 > 0 && this.values.vctp.p2 < 0) this.values.vctp.result2 = Math.atan(this.values.vctp.p2 / this.values.vctp.p1) * 180 / Math.PI + 360;
			else this.values.vctp.result2 = Math.atan(this.values.vctp.p2 / this.values.vctp.p1) * 180 / Math.PI + 180;
		},
		vptc1(x) {
			this.values.vptc.p1 = x;
			this.vptc();
		},
		vptc2(x) {
			this.values.vptc.p2 = x;
			this.vptc();
		},
		vptc() {
			this.values.vptc.result1 = this.values.vptc.p1 * Math.cos(this.values.vptc.p2 * Math.PI / 180);
			this.values.vptc.result2 = this.values.vptc.p1 * Math.sin(this.values.vptc.p2 * Math.PI / 180);
		},
		dbp1(x) {
			this.values.dbp.p1 = x;
			this.dbp();
		},
		dbp2(x) {
			this.values.dbp.p2 = x;
			this.dbp();
		},
		dbp3(x) {
			this.values.dbp.p3 = x;
			this.dbp();
		},
		dbp4(x) {
			this.values.dbp.p4 = x;
			this.dbp();
		},
		dbp() {
			this.values.dbp.result = Math.sqrt(Math.pow(this.values.dbp.p3 - this.values.dbp.p1, 2) + Math.pow(this.values.dbp.p4 - this.values.dbp.p2, 2));
		},
		midp1(x) {
			this.values.midp.p1 = x;
			this.midp();
		},
		midp2(x) {
			this.values.midp.p2 = x;
			this.midp();
		},
		midp3(x) {
			this.values.midp.p3 = x;
			this.midp();
		},
		midp4(x) {
			this.values.midp.p4 = x;
			this.midp();
		},
		midp() {
			this.values.midp.result1 = (parseFloat(this.values.midp.p1) + parseFloat(this.values.midp.p3)) / 2;
			this.values.midp.result2 = (parseFloat(this.values.midp.p2) + parseFloat(this.values.midp.p4)) / 2;
		},
		dbl1(x) {
			this.values.dbl.p1 = x;
			this.dblR1();
		},
		dbl2(x) {
			this.values.dbl.p2 = x;
			this.dblR1();
		},
		dbl3(x) {
			this.values.dbl.p3 = x;
			this.dblR1();
		},
		dbl4(x) {
			this.values.dbl.p4 = x;
			this.dblR2();
		},
		dbl5(x) {
			this.values.dbl.p5 = x;
			this.dblR2();
		},
		dbl6(x) {
			this.values.dbl.p6 = x;
			this.dblR2();
		},
		dbl7(x) {
			this.values.dbl.p7 = x;
			this.dblR2();
		},
		dblR1() {
			this.values.dbl.result1 = Math.abs(parseFloat(this.values.dbl.p3) - parseFloat(this.values.dbl.p2)) / Math.sqrt(Math.pow(parseFloat(this.values.dbl.p1), 2) + 1);
		},
		dblR2() {
			this.values.dbl.result2 = Math.abs(parseFloat(this.values.dbl.p7) - parseFloat(this.values.dbl.p6)) / (Math.sqrt(Math.pow(parseFloat(this.values.dbl.p4), 2) + Math.pow(parseFloat(this.values.dbl.p5), 2)));
		},
		dblap1(x) {
			this.values.dblap.p1 = x;
			this.dblap();
		},
		dblap2(x) {
			this.values.dblap.p2 = x;
			this.dblap();
		},
		dblap3(x) {
			this.values.dblap.p3 = x;
			this.dblap();
		},
		dblap4(x) {
			this.values.dblap.p4 = x;
			this.dblap();
		},
		dblap5(x) {
			this.values.dblap.p5 = x;
			this.dblap();
		},
		dblap() {
			this.values.dblap.result = Math.abs(parseFloat(this.values.dblap.p1) * parseFloat(this.values.dblap.p4) + parseFloat(this.values.dblap.p2) * parseFloat(this.values.dblap.p5) + parseFloat(this.values.dblap.p3)) / Math.sqrt(Math.pow(parseFloat(this.values.dblap.p1), 2) + Math.pow(parseFloat(this.values.dblap.p2), 2));
		},
		cpd1(x) {
			this.values.cpd.p1 = x;
			this.cpd();
		},
		cpd2(x) {
			this.values.cpd.p2 = x;
			this.cpd();
		},
		cpd3(x) {
			this.values.cpd.p3 = x;
			this.cpd();
		},
		cpd4(x) {
			this.values.cpd.p4 = x;
			this.cpd();
		},
		cpd() {
			this.values.cpd.result1 = (parseFloat(this.values.cpd.p1) * parseFloat(this.values.cpd.p3) + parseFloat(this.values.cpd.p2) * parseFloat(this.values.cpd.p4)) / (Math.pow(parseFloat(this.values.cpd.p3), 2) + Math.pow(parseFloat(this.values.cpd.p4), 2));
			this.values.cpd.result2 = (parseFloat(this.values.cpd.p2) * parseFloat(this.values.cpd.p3) - parseFloat(this.values.cpd.p1) * parseFloat(this.values.cpd.p4)) / (Math.pow(parseFloat(this.values.cpd.p3), 2) + Math.pow(parseFloat(this.values.cpd.p4), 2));
		},
		cpdp1(x) {
			this.values.cpdp.p1 = x;
			this.cpdp();
		},
		cpdp2(x) {
			this.values.cpdp.p2 = x;
			this.cpdp();
		},
		cpdp3(x) {
			this.values.cpdp.p3 = x;
			this.cpdp();
		},
		cpdp4(x) {
			this.values.cpdp.p4 = x;
			this.cpdp();
		},
		cpdp() {
			this.values.cpdp.result1 = parseFloat(this.values.cpdp.p1) / parseFloat(this.values.cpdp.p3);
			this.values.cpdp.result2 = parseFloat(this.values.cpdp.p2) - parseFloat(this.values.cpdp.p4);
		},
		crtp1(x) {
			this.values.crtp.p1 = x;
			this.crtp();
		},
		crtp2(x) {
			this.values.crtp.p2 = x;
			this.crtp();
		},
		crtp() {
			this.values.crtp.result1 = Math.sqrt(Math.pow(parseFloat(this.values.crtp.p1), 2) + Math.pow(parseFloat(this.values.crtp.p2), 2));
			if (parseFloat(this.values.crtp.p1) > 0 && parseFloat(this.values.crtp.p2) > 0) this.values.crtp.result2 = Math.atan(parseFloat(this.values.crtp.p2) / parseFloat(this.values.crtp.p1)) * 180 / Math.PI;
			else if (parseFloat(this.values.crtp.p1) > 0 && parseFloat(this.values.crtp.p2) < 0) this.values.crtp.result2 = Math.atan(parseFloat(this.values.crtp.p2) / parseFloat(this.values.crtp.p1)) * 180 / Math.PI + 360;
			else this.values.crtp.result2 = Math.atan(parseFloat(this.values.crtp.p2) / parseFloat(this.values.crtp.p1)) * 180 / Math.PI + 180;
		},
		cptr1(x) {
			this.values.cptr.p1 = x;
			this.cptr();
		},
		cptr2(x) {
			this.values.cptr.p2 = x;
			this.cptr();
		},
		cptr() {
			this.values.cptr.result1 = parseFloat(this.values.cptr.p1) * Math.cos(parseFloat(this.values.cptr.p2) * Math.PI / 180);
			this.values.cptr.result2 = parseFloat(this.values.cptr.p1) * Math.sin(parseFloat(this.values.cptr.p2) * Math.PI / 180);
		},
	},
	async asyncData({ $content, app }) {
		let toolsList = await $content(app.i18n.defaultLocale, 'math-tools/tools').fetch().catch(err => { return [] });
		if (app.i18n.defaultLocale !== app.i18n.locale) {
			try {
				const translatedPosts = await $content(app.i18n.locale, 'math-tools/tools').fetch();
				toolsList = toolsList.map(tool => {
					const translatedTool = translatedPosts.find(translated => translated.slug === tool.slug);
					return translatedTool || tool;
				});
			} catch (ignored) {
			}
		}
		let i = 0;
		let tools = {};
		for (let tool of toolsList) {
			tool.index = i;
			tools[tool.id] = tool;
			i++;
		}
		for (let [key] of Object.entries(tools)) {
			tools[key].list = tools;
		}
		return { tools, };
	},
}
</script>